import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import type { Student } from "./useClasses";
import { FETCH_ERRORS, getErrorMessage } from "@/lib/errors";
import { apiFetch } from "@/lib/api-fetch";

export function useStudents(classId: number | null) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async (id: number) => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await apiFetch<Student[]>(
      `${API_ENDPOINTS.classes}/${id}/students`,
    );

    if (fetchError || !data) {
      const message = fetchError || FETCH_ERRORS.STUDENTS_FETCH;
      setError(message);
      setStudents([]);
    } else {
      setStudents(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (classId) {
      fetchStudents(classId);
    } else {
      setStudents([]);
      setError(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  return {
    students,
    loading,
    error,
    refetch: classId ? () => fetchStudents(classId) : undefined,
  };
}
