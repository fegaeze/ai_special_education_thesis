import { Upload, X, Download } from "lucide-react";
import { useState } from "react";
import Papa from "papaparse";
import { Button } from "../../../../components/ui/button";
import { VALIDATION_MESSAGES } from "@/lib/errors";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";

interface StudentUploadProps {
  onStudentsUploaded: (students: { name: string }[]) => void;
  currentStudents: { name: string }[];
  setError: UseFormSetError<{ name: string; students: { name: string }[] }>;
  clearErrors: UseFormClearErrors<{
    name: string;
    students: { name: string }[];
  }>;
}

export function StudentUpload({
  onStudentsUploaded,
  currentStudents,
  setError,
  clearErrors,
}: StudentUploadProps) {
  const [studentFile, setStudentFile] = useState<File | null>(null);

  const clearFileAndStudents = (
    event?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStudentFile(null);
    onStudentsUploaded([] as { name: string }[]);
    if (event) {
      event.target.value = "";
    }
  };

  const downloadTemplate = () => {
    const headers = ["name"];
    const exampleNames = [
      "John Doe",
      "Jane Smith",
      "Bob Johnson",
      "Alice Brown",
      "Charlie Wilson",
      "Emma Davis",
      "Michael Wilson",
      "Sarah Johnson",
      "David Miller",
      "Lisa Anderson",
    ];

    // Create CSV content without leading/trailing spaces
    const csvContent = [
      headers.join(","),
      ...exampleNames.map((name) => name.trim()),
    ].join("\n");

    // Add UTF-8 BOM for Excel compatibility (optional but safe)
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students-template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      setError("students", {
        type: "manual",
        message: VALIDATION_MESSAGES.CSV_FILE_REQUIRED,
      });
      return;
    }

    clearErrors("students");
    clearFileAndStudents();

    const isCSV =
      file.name.toLowerCase().endsWith(".csv") ||
      file.type === "text/csv" ||
      file.type === "application/csv" ||
      file.type === "text/plain";

    if (!isCSV) {
      setError("students", {
        type: "manual",
        message: VALIDATION_MESSAGES.CSV_FILE_REQUIRED,
      });
      return;
    }

    setStudentFile(file);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results) => {
        if (results.errors && results.errors.length > 0) {
          setError("students", {
            type: "manual",
            message: VALIDATION_MESSAGES.CSV_PARSE_ERROR,
          });
          clearFileAndStudents(event);
          return;
        }

        const fields = results.meta.fields || [];
        const hasValidHeader = fields.some((h) =>
          ["name", "Name", "NAME"].includes(h),
        );

        if (!hasValidHeader) {
          setError("students", {
            type: "manual",
            message: VALIDATION_MESSAGES.HEADER_NOT_FOUND,
          });
          clearFileAndStudents(event);
          return;
        }

        if (results.data.length === 0) {
          setError("students", {
            type: "manual",
            message: VALIDATION_MESSAGES.NO_VALID_STUDENTS,
          });
          clearFileAndStudents(event);
          return;
        }

        const students = results.data
          .map((row: any) => {
            const name = row.name || row.Name || row.NAME;
            return name && typeof name === "string" && name.trim()
              ? { name: name.trim() }
              : null;
          })
          .filter((s): s is { name: string } => s !== null);

        if (students.length === 0) {
          setError("students", {
            type: "manual",
            message: VALIDATION_MESSAGES.NO_VALID_STUDENTS,
          });
          clearFileAndStudents(event);
          return;
        }

        onStudentsUploaded(students);
        event.target.value = "";
      },
      error: () => {
        setError("students", {
          type: "manual",
          message: VALIDATION_MESSAGES.CSV_PARSE_ERROR,
        });
        clearFileAndStudents(event);
      },
    });
  };

  const removeStudentFile = () => {
    clearErrors("students");
    clearFileAndStudents();
  };

  return (
    <div className="space-y-4">
      {/* CSV Template Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-blue-900 mb-2">
              CSV Format Required
            </h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p>• First column must have header: "name"</p>
              <p>• One student name per row</p>
              <p>• Download template for correct format</p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={downloadTemplate}
            className="text-blue-700 border-blue-300 hover:bg-blue-100"
          >
            <Download className="h-3 w-3 mr-1" />
            Template
          </Button>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="w-full space-y-3">
        <div
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition"
          onClick={() => document.getElementById("student-file")?.click()}
        >
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
            id="student-file"
          />
          <Upload className="h-6 w-6 text-gray-500 mb-2" />
          <p className="text-sm font-medium text-gray-700">
            Click to upload a CSV file
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Only .csv files are supported
          </p>
        </div>

        {studentFile && (
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
            <p className="text-sm text-gray-700 truncate max-w-[90%]">
              Selected: {studentFile.name}
            </p>
            <button
              type="button"
              onClick={removeStudentFile}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Students List */}
      {currentStudents.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Students ({currentStudents.length})
            </span>
            <span className="text-xs text-green-600 font-medium">
              ✓ Uploaded successfully
            </span>
          </div>
          <div className="max-h-32 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50">
            {currentStudents.map((student, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 py-1 px-2 hover:bg-gray-100 rounded"
              >
                {student.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
