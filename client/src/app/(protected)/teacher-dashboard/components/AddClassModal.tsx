"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useClassContext } from "@/contexts/ClassContext";
import { Button } from "@/components/ui/button";
import { StudentUpload } from "./StudentUpload";
import { VALIDATION_MESSAGES } from "@/lib/errors";

interface AddClassModalProps {
  onClose: () => void;
  open: boolean;
  createClass: (data: {
    name: string;
    students: { name: string }[];
  }) => Promise<{ success: boolean; message?: string; class?: any }>;
}

const classSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Class name is required")
    .max(100, "Class name must be less than 100 characters")
    .refine((name) => name.trim().length > 0, {
      message: "Class name cannot be empty",
    }),
  students: z
    .array(z.object({ name: z.string().min(1, "Student name is required") }))
    .min(1, VALIDATION_MESSAGES.STUDENTS_REQUIRED)
    .refine((students) => students.length > 0, {
      message: VALIDATION_MESSAGES.STUDENTS_REQUIRED,
    }),
});

type ClassForm = z.infer<typeof classSchema>;

export default function AddClassModal({
  onClose,
  open,
  createClass,
}: AddClassModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { classes } = useClassContext();

  const {
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
    setValue,
  } = useForm<ClassForm>({
    resolver: zodResolver(classSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      students: [],
    },
  });

  const watchedValues = watch();

  function isDuplicateClassName(name: string | undefined | null) {
    if (!name || typeof name !== "string") return false;
    const normalized = name.trim().toLowerCase();
    const isDuplicate = classes.some(
      (c) => c.name.trim().toLowerCase() === normalized,
    );
    return isDuplicate;
  }

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleStudentsUploaded = (students: { name: string }[]) => {
    setValue("students", students);
  };

  const onSubmit = async (data: ClassForm) => {
    // Check for duplicate class name
    if (isDuplicateClassName(data.name)) {
      setError("name", {
        type: "manual",
        message: "This class name already exists.",
      });
      return;
    }

    setIsSubmitting(true);
    const result = await createClass({
      name: data.name,
      students: data.students,
    });
    setIsSubmitting(false);

    if (result.success) {
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg text-gray-700">
            Create New Class
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 -mt-2">
            Add a new class and upload your student list.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            {/* Class Name Field */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Class Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter class name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Student Upload Field */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Upload Students (CSV) <span className="text-red-500">*</span>
              </label>
              <StudentUpload
                onStudentsUploaded={handleStudentsUploaded}
                currentStudents={watchedValues.students}
                setError={setError}
                clearErrors={clearErrors}
              />
              {errors.students && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.students.message}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !watchedValues.name.trim() ||
                watchedValues.students.length === 0
              }
            >
              {isSubmitting ? "Creating..." : "Create Class"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
