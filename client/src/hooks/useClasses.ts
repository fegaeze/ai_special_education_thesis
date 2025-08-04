import { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { FETCH_ERRORS, AUTH_ERRORS, getErrorMessage } from "@/lib/errors";
import { useAuth } from "./useAuth";

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
  const { getCurrentToken } = useAuth();
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

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error(AUTH_ERRORS.NOT_LOGGED_IN);
      }

      const res = await fetch(API_ENDPOINTS.classes, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || FETCH_ERRORS.CLASSES_FETCH);
      }

      const data: Class[] = await res.json();
      const normalized = data.map(normalizeClass);
      setClasses(normalized);
    } catch (error: unknown) {
      const message = getErrorMessage(error, FETCH_ERRORS.CLASSES_FETCH);
      setError(message);
      setClasses([]);
    } finally {
      setLoading(false);
    }
  };

  const createClass = async (
    data: CreateClassData,
  ): Promise<CreateClassResponse> => {
    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error(AUTH_ERRORS.NOT_LOGGED_IN);
      }

      const res = await fetch(API_ENDPOINTS.classes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        const message = result?.message || FETCH_ERRORS.CLASS_CREATE;
        return { success: false, message };
      }

      const newClass = normalizeClass(result);

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
