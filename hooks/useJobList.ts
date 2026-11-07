"use client";

import { useState, useCallback, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Job } from "@/lib/types";

export function useJobList(jobs: Job[]) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlJobId = searchParams.get("jobId");

  // Keep instantaneous selected job ID in React state
  const [currentSelectedId, setCurrentSelectedId] = useState<string | null>(
    urlJobId || (jobs.length > 0 ? jobs[0].id : null)
  );

  // Adjust state during render if jobs change and the selected job is no longer present
  const [prevJobs, setPrevJobs] = useState(jobs);
  if (jobs !== prevJobs) {
    setPrevJobs(jobs);
    const exists = jobs.some((j) => j.id === currentSelectedId);
    if (!exists && jobs.length > 0) {
      setCurrentSelectedId(jobs[0].id);
    }
  }

  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = window.localStorage.getItem("vesla_saved_jobs");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  const toggleSaveJob = useCallback((jobId: string) => {
    setSavedJobIds((prev) => {
      const exists = prev.includes(jobId);
      const next = exists ? prev.filter((id) => id !== jobId) : [...prev, jobId];
      try {
        window.localStorage.setItem("vesla_saved_jobs", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  // Compute active job instantly from local state
  const activeJob = useMemo(() => {
    if (!jobs || jobs.length === 0) return null;
    if (currentSelectedId) {
      const found = jobs.find((j) => j.id === currentSelectedId);
      if (found) return found;
    }
    return jobs[0];
  }, [jobs, currentSelectedId]);

  // Instant 0ms selection
  const selectJob = useCallback(
    (job: Job) => {
      // 1. Instant local state update (0ms UI switch)
      setCurrentSelectedId(job.id);
      setIsMobileDetailOpen(true);

      // 2. Non-blocking URL update
      try {
        const params = new URLSearchParams(window.location.search);
        params.set("jobId", job.id);
        const newUrl = `${pathname}?${params.toString()}`;
        window.history.replaceState(null, "", newUrl);
      } catch {
        const params = new URLSearchParams(searchParams.toString());
        params.set("jobId", job.id);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [searchParams, router, pathname]
  );

  const closeMobileDetail = useCallback(() => {
    setIsMobileDetailOpen(false);
  }, []);

  return {
    activeJob,
    savedJobIds,
    isMobileDetailOpen,
    selectJob,
    toggleSaveJob,
    closeMobileDetail,
  };
}
