import { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { FETCH_ERRORS, getErrorMessage } from "@/lib/errors";
import { apiFetch } from "@/lib/api-fetch";

const AUTH_ERROR_CODES = new Set([401, 403]);

export interface Student {
  id: number;
  name: string;
  problemsAttempted: number;
  avgAccuracy: number;
  avgAttempts: number;
  avgTime: number;
  revealUsage: number;
}

export interface Class {
  id: number;
  name: string;
  createdAt: string;
  studentCount: number;
  students: Student[];
}

interface CreateClassData {
  name: string;
  students: { name: string }[];
}

interface CreateClassResponse {
  success: boolean;
  message?: string;
  class?: Class;
}

function normalizeClass(cls: Class): Class {
  return {
    ...cls,
    name: cls.name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  };
}

export function useClasses() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClassState] = useState<Class>(classes[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    if (classes.length > 0) {
      const storedId = Number(localStorage.getItem("selectedClassId"));
      const match = storedId ? classes.find((c) => c.id === storedId) : null;

      if (match) {
        setSelectedClassState(match);
      } else {
        setSelectedClassState(classes[0]);
        localStorage.setItem("selectedClassId", classes[0].id.toString());
      }
    }
  }, [classes]);

  const setSelectedClass = (cls: Class) => {
    try {
      localStorage.setItem("selectedClassId", cls.id.toString());
      setSelectedClassState(cls);
    } catch (error) {
      setError(error as string);
    }
  };

  const fetchClasses = async () => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError, status } = await apiFetch<Class[]>(API_ENDPOINTS.classes);

    if (fetchError || !data) {
      // 401/403 are handled globally by AuthContext — don't crash the component
      if (!AUTH_ERROR_CODES.has(status)) {
        setError(fetchError || FETCH_ERRORS.CLASSES_FETCH);
      }
      setClasses([]);
    } else {
      setClasses(data.map(normalizeClass));
    }
    setLoading(false);
  };

  const createClass = async (
    data: CreateClassData,
  ): Promise<CreateClassResponse> => {
    try {
      const { data: result, error: fetchError } = await apiFetch<Class>(
        API_ENDPOINTS.classes,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (fetchError || !result) {
        return { success: false, message: fetchError || FETCH_ERRORS.CLASS_CREATE };
      }

      const newClass = normalizeClass(result as Class);

      setClasses((prev) => {
        const updated = [...prev, newClass];
        return updated;
      });

      // Automatically select the newly created class
      setSelectedClass(newClass);

      return { success: true, class: newClass };
    } catch (error) {
      return {
        success: false,
        message: FETCH_ERRORS.CLASS_CREATE_RETRY,
      };
    }
  };

  return {
    classes,
    selectedClass,
    setSelectedClass,
    loading,
    error,
    refetch: fetchClasses,
    createClass,
  };
}
