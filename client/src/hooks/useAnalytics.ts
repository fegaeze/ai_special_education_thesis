import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { useAuth } from "./useAuth";
import { FETCH_ERRORS, AUTH_ERRORS, getErrorMessage } from "@/lib/errors";
import type {
  AnalyticsData,
} from "@/lib/types/quiz";

export function useAnalytics(classId: number | null) {
  const { getCurrentToken } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    students: [],
    classOverview: {
      totalStudents: 0,
      totalSessions: 0,
      avgClassAccuracy: 0,
      avgClassTime: 0,
    },
    loading: false,
    error: null,
  });

  const fetchAnalytics = async () => {
    if (!classId) {
      setAnalytics({
        students: [],
        classOverview: {
          totalStudents: 0,
          totalSessions: 0,
          avgClassAccuracy: 0,
          avgClassTime: 0,
        },
        loading: false,
        error: null,
      });
      return;
    }

    setAnalytics((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error(AUTH_ERRORS.NOT_LOGGED_IN);
      }

      const url = new URL(`${API_ENDPOINTS.classes}/${classId}/analytics`);
      if (selectedDate) {
        url.searchParams.append("date", selectedDate.toISOString());
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || FETCH_ERRORS.ANALYTICS_FETCH);
      }

      const data = await response.json();
      setAnalytics({
        students: data.students || [],
        classOverview: data.classOverview || {
          totalStudents: 0,
          totalSessions: 0,
          avgClassAccuracy: 0,
          avgClassTime: 0,
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setAnalytics((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  };

  useEffect(() => {
    fetchAnalytics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId, selectedDate]);

  return {
    ...analytics,
    selectedDate,
    setSelectedDate,
    refetchAnalytics: () => {
      fetchAnalytics();
    },
  };
}
