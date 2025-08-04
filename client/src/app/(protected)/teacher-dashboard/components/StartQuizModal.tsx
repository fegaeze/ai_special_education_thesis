import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Play, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { type CreateQuizData } from "@/hooks/useQuizManagement";
import { QuizSession, CompSuperType } from "@/lib/types/quiz";

interface Class {
  id: number;
  name: string;
  studentCount: number;
}

const schema = z
  .object({
    problemCount: z
      .string()
      .min(1, { message: "This field is required" })
      .refine(
        (val) => {
          const num = parseInt(val);
          return !isNaN(num) && num >= 1 && num <= 50;
        },
        {
          message: "Enter a number between 1 and 50",
        },
      ),
    problemType: z.enum(["All", "Change", "Combine", "Compare", "Mixed"]),
    selectedTypes: z.array(z.nativeEnum(CompSuperType)).optional(),
  })
  .refine(
    (data) => {
      // For non-"All" tests, limit to 5 questions
      if (data.problemType !== "All") {
        const count = parseInt(data.problemCount);
        return count <= 5;
      }
      return true;
    },
    {
      message: "Non-'All' tests are limited to 5 questions maximum",
      path: ["problemCount"],
    },
  );

type FormData = z.infer<typeof schema>;

interface StartQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClass: Class;
  onQuizCreated?: () => void;
  createQuiz: (quizData: CreateQuizData) => Promise<QuizSession | null>;
  loading: boolean;
}

export function StartQuizModal({
  isOpen,
  onClose,
  selectedClass,
  onQuizCreated,
  createQuiz,
  loading,
}: StartQuizModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      problemCount: "5",
      problemType: "All",
      selectedTypes: [],
    },
  });

  const watchedProblemType = watch("problemType");
  const watchedSelectedTypes = watch("selectedTypes") || [];

  const onSubmit = async (data: FormData) => {
    if (!selectedClass) return;

    const allTypes = ["Change", "Combine", "Compare"];
    if (
      data.problemType === "Mixed" &&
      (!data.selectedTypes || data.selectedTypes.length === 0)
    ) {
      toast.error("Please select at least one problem type for Mixed quizzes");
      return;
    }

    // If all types are selected in Mixed, treat as All
    if (
      data.problemType === "Mixed" &&
      allTypes.every((type) =>
        data.selectedTypes?.includes(type as CompSuperType),
      )
    ) {
      data.problemType = "All";
      data.selectedTypes = undefined;
    }

    const count = parseInt(data.problemCount);

    const quizData: CreateQuizData = {
      classId: selectedClass.id,
      settings: {
        problemCount: count,
        problemType: data.problemType,
        selectedTypes:
          data.problemType === "Mixed" ? data.selectedTypes : undefined,
      },
    };

    const newQuiz = await createQuiz(quizData);

    if (newQuiz) {
      reset();
      onClose();
      onQuizCreated?.();
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-md font-medium text-gray-700">
            Start New Quiz
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 -mt-2">
            Add the number of problems and problem type to start a new quiz for
            your class.
          </DialogDescription>
        </DialogHeader>

        <Card className="p-3 bg-blue-50 border-blue-200 text-sm text-blue-800 space-y-1">
          <p className="flex items-center">
            <AlertTriangle size={16} className="h-4 w-4 inline mr-2" />
            <span>
              Quiz codes will be generated for{" "}
              <strong>{selectedClass.studentCount} students</strong>
            </span>
          </p>
        </Card>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Problem Count */}
          <div>
            <Label
              htmlFor="problemCount"
              className="text-sm font-medium text-gray-500"
            >
              Number of Problems <span className="text-red-500">*</span>
            </Label>
            <Input
              id="problemCount"
              type="number"
              min="1"
              max={watchedProblemType === "All" ? "50" : "5"}
              {...register("problemCount")}
              className="mt-1 w-full border-gray-300 focus:ring-primary focus:ring-0"
              placeholder={
                watchedProblemType === "All"
                  ? "Enter number of problems (1-50)"
                  : "Enter number of problems (1-5)"
              }
            />
            {errors.problemCount && (
              <p className="text-sm text-red-600 mt-1">
                {errors.problemCount.message}
              </p>
            )}
            {watchedProblemType !== "All" && (
              <p className="text-sm text-blue-600 mt-1">
                {`ⓘ Non-"All" tests are limited to 5 questions maximum`}
              </p>
            )}
          </div>

          {/* Problem Type */}
          <div>
            <Label
              htmlFor="problemType"
              className="text-sm font-medium text-gray-500"
            >
              Problem Type <span className="text-red-500">*</span>
            </Label>
            <Select
              value={watchedProblemType}
              onValueChange={(val) => {
                setValue(
                  "problemType",
                  val as "All" | "Change" | "Combine" | "Compare" | "Mixed",
                );
                if (val !== "Mixed") {
                  setValue("selectedTypes", []);
                }
              }}
            >
              <SelectTrigger className="mt-1 w-full border-gray-300 focus:ring-primary focus:ring-0">
                <SelectValue placeholder="Select problem type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-500">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Change">Change</SelectItem>
                <SelectItem value="Combine">Combine</SelectItem>
                <SelectItem value="Compare">Compare</SelectItem>
                <SelectItem value="Mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
            {errors.problemType && (
              <p className="text-sm text-red-600 mt-1">
                {errors.problemType.message}
              </p>
            )}
          </div>

          {/* Multiple Problem Types Selection */}
          {watchedProblemType === "Mixed" && (
            <div>
              <Label className="text-sm font-medium text-gray-500">
                Multiple Problem Types Selection{" "}
                <span className="text-red-500">*</span>
              </Label>
              <div className="mt-2 space-y-2">
                {["Change", "Combine", "Compare"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={watchedSelectedTypes.includes(
                        type as CompSuperType,
                      )}
                      onCheckedChange={(checked: boolean) => {
                        if (checked) {
                          setValue("selectedTypes", [
                            ...watchedSelectedTypes,
                            type as CompSuperType,
                          ]);
                        } else {
                          setValue(
                            "selectedTypes",
                            watchedSelectedTypes.filter((t) => t !== type),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={type} className="text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
              {watchedSelectedTypes.length === 0 && (
                <p className="text-sm text-red-600 mt-1">
                  Please select at least one problem type
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              variant="default"
              disabled={loading}
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating Quiz...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Start Quiz
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
