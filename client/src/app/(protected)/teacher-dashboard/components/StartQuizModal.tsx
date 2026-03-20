import { useForm } from "react-hook-form";
import { zodSafeResolver } from "@/lib/zod-safe-resolver";
import * as z from "zod";
import { Play, Loader2, AlertTriangle } from "lucide-react";
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
import { Card } from "@/components/ui/card";
import { type CreateQuizData } from "@/hooks/useQuizManagement";
import { QuizSession } from "@/lib/types/quiz";

interface Class {
  id: number;
  name: string;
  studentCount: number;
}

const schema = z.object({
  problemCount: z
    .string()
    .min(1, { message: "This field is required" })
    .refine(
      (val) => {
        const num = Number.parseInt(val);
        return !Number.isNaN(num) && num >= 1;
      },
      { message: "Enter a number of at least 1" },
    ),
  problemType: z.enum(["All", "Change", "Combine", "Compare"]),
});

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
}: Readonly<StartQuizModalProps>) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodSafeResolver(schema),
    defaultValues: {
      problemCount: "10",
      problemType: "All",
    },
  });

  const watchedProblemType = watch("problemType");

  const onSubmit = async (data: FormData) => {
    if (!selectedClass) return;

    const quizData: CreateQuizData = {
      classId: selectedClass.id,
      settings: {
        problemCount: Number.parseInt(data.problemCount),
        problemType: data.problemType,
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
            Create new Quiz
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
              {...register("problemCount")}
              className="mt-1 w-full border-gray-300 focus:ring-primary focus:ring-0"
              placeholder="Enter number of problems"
            />
            {errors.problemCount && (
              <p className="text-sm text-red-600 mt-1">
                {errors.problemCount.message}
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
                  val as "All" | "Change" | "Combine" | "Compare",
                );
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
              </SelectContent>
            </Select>
            {errors.problemType && (
              <p className="text-sm text-red-600 mt-1">
                {errors.problemType.message}
              </p>
            )}
          </div>

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
                  Create new Quiz
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
