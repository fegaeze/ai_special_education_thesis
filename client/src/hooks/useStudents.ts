import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import type { Student } from "./useClasses";
import { useAuth } from "./useAuth";
import { FETCH_ERRORS, AUTH_ERRORS, getErrorMessage } from "@/lib/errors";

export function useStudents(classId: number | null) {
  const { getCurrentToken } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error(AUTH_ERRORS.NOT_LOGGED_IN);
      }

      const res = await fetch(`${API_ENDPOINTS.classes}/${id}/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || FETCH_ERRORS.STUDENTS_FETCH);
      }

      const data: Student[] = await res.json();
      setStudents(data);
    } catch (error: unknown) {
      const message = getErrorMessage(error, FETCH_ERRORS.STUDENTS_FETCH);
      setError(message);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch students when classId changes
  useEffect(() => {
    if (classId) {
      fetchStudents(classId);
    } else {
      setStudents([]);
      setError(null);
    }
  }, [classId]);

  return {
    students,
    loading,
    error,
    refetch: classId ? () => fetchStudents(classId) : undefined,
  };
}
