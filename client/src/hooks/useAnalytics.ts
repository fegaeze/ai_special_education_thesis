import { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { FETCH_ERRORS } from "@/lib/errors";
import { apiFetch } from "@/lib/api-fetch";
import type { AnalyticsData } from "@/lib/types/quiz";

const EMPTY_OVERVIEW = {
  totalStudents: 0,
  totalSessions: 0,
  avgClassAccuracy: 0,
  avgClassTime: 0,
};

const INITIAL_STATE: AnalyticsData = {
  students: [],
  classOverview: EMPTY_OVERVIEW,
  sessionDates: [],
  loading: false,
  error: null,
};

type AnalyticsPayload = {
  students: AnalyticsData["students"];
  classOverview: AnalyticsData["classOverview"];
  sessionDates: string[];
};

function payloadToState(data: AnalyticsPayload): AnalyticsData {
  return {
    students: data.students ?? [],
    classOverview: data.classOverview ?? EMPTY_OVERVIEW,
    sessionDates: (data.sessionDates ?? []).map((d) => new Date(d)),
    loading: false,
    error: null,
  };
}

export function useAnalytics(classId: number | null) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [analytics, setAnalytics] = useState<AnalyticsData>(INITIAL_STATE);

  // Refs so polling interval always reads the latest values without re-mounting
  const classIdRef = useRef(classId);
  const selectedDateRef = useRef(selectedDate);
  useEffect(() => {
    classIdRef.current = classId;
    selectedDateRef.current = selectedDate;
  });

  const fetchAnalytics = async () => {
    if (!classId) {
      setAnalytics(INITIAL_STATE);
      return;
    }

    setAnalytics((prev) => ({ ...prev, loading: true, error: null }));

    const url = new URL(`${API_ENDPOINTS.classes}/${classId}/analytics`);
    if (selectedDate) url.searchParams.append("date", selectedDate.toISOString());

    const { data, error: fetchError } = await apiFetch<AnalyticsPayload>(url.toString());

    if (fetchError || !data) {
      setAnalytics((prev) => ({
        ...prev,
        loading: false,
        error: fetchError || FETCH_ERRORS.ANALYTICS_FETCH,
      }));
    } else {
      setAnalytics(payloadToState(data));
    }
  };

  // Explicit fetch (with loading state) when class or date changes
  useEffect(() => {
    void fetchAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId, selectedDate]);

  // Silent background poll — no loading spinner
  useEffect(() => {
    if (!classId) return;

    const silentPoll = async () => {
      const id = classIdRef.current;
      if (!id) return;
      const url = new URL(`${API_ENDPOINTS.classes}/${id}/analytics`);
      const date = selectedDateRef.current;
      if (date) url.searchParams.append("date", date.toISOString());
      const { data } = await apiFetch<AnalyticsPayload>(url.toString());
      if (data) setAnalytics(payloadToState(data));
    };

    const interval = setInterval(() => void silentPoll(), 30_000);
    return () => clearInterval(interval);
  }, [classId]);

  return {
    ...analytics,
    selectedDate,
    setSelectedDate,
    refetchAnalytics: fetchAnalytics,
  };
}
