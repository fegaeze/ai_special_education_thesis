import { useClassContext } from "@/contexts/ClassContext";
import { useStudents } from "@/hooks/useStudents";

function formatTime(seconds: number | null) {
  if (seconds == null) return "-";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function StudentsTable() {
  const { selectedClass } = useClassContext();
  const { students } = useStudents(selectedClass?.id || null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Problems Attempted
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Avg Accuracy
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Avg Attempts
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Avg Time
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                Reveal Usage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {students.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-400">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student: any) => (
                <tr key={student.id}>
                  <td className="px-4 py-2 text-gray-900 font-medium">
                    {student.name}
                  </td>
                  <td className="px-4 py-2">
                    {student.problemsAttempted ?? 0}
                  </td>
                  <td className="px-4 py-2">
                    {student.avgAccuracy != null
                      ? `${student.avgAccuracy}%`
                      : "-"}
                  </td>
                  <td className="px-4 py-2">
                    {student.avgAttempts != null
                      ? student.avgAttempts.toFixed(2)
                      : "-"}
                  </td>
                  <td className="px-4 py-2">{formatTime(student.avgTime)}</td>
                  <td className="px-4 py-2">
                    {student.revealUsage != null
                      ? `${student.revealUsage}%`
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
