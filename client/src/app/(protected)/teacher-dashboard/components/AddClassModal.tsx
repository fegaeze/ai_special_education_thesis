"use client";

import { zodSafeResolver } from "@/lib/zod-safe-resolver";
import { useState, useCallback } from "react";
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
  const [studentsText, setStudentsText] = useState("");

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
    resolver: zodSafeResolver(classSchema),
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
    setStudentsText("");
    onClose();
  };

  const parseNamesFromText = useCallback(
    (text: string): { name: string }[] => {
      const names = text
        .split(/\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      const seen = new Set<string>();
      return names
        .filter((name) => {
          const key = name.toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .map((name) => ({ name }));
    },
    [],
  );

  const handleStudentsTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setStudentsText(text);
    const students = parseNamesFromText(text);
    setValue("students", students);
    if (students.length > 0) clearErrors("students");
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
            Add a new class and enter your students’ names.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            {/* Class Name Field */}
            <div>
              <label
                htmlFor="add-class-name"
                className="block text-xs font-medium text-gray-700 mb-2"
              >
                Class Name <span className="text-red-500">*</span>
              </label>
              <input
                id="add-class-name"
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

            {/* Student names (manual entry) */}
            <div>
              <label
                htmlFor="add-class-students"
                className="block text-xs font-medium text-gray-700 mb-2"
              >
                Student Names <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Enter one name per line. Duplicates are ignored.
              </p>
              <textarea
                id="add-class-students"
                value={studentsText}
                placeholder="e.g.&#10;Anna Smith&#10;Ben Jones&#10;Maria Garcia"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-y min-h-[100px]"
                onChange={handleStudentsTextChange}
              />
              {watchedValues.students.length > 0 && (
                <p className="text-xs text-green-600 mt-2">
                  {watchedValues.students.length} student
                  {watchedValues.students.length === 1 ? "" : "s"} added
                </p>
              )}
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
                watchedValues.name.trim() === "" ||
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
