"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useTransition } from "react";
import { JobFiltersState, WorkplaceType, SeniorityLevel, SortOption } from "@/lib/types";

export function useJobFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentFilters: JobFiltersState = {
    query: searchParams.get("query") || "",
    location: searchParams.get("location") || "",
    workplaceType: (searchParams.get("workplaceType") as WorkplaceType) || "all",
    seniority: (searchParams.get("seniority") as SeniorityLevel) || "all",
    technology: searchParams.get("technology") || "all",
    sortBy: (searchParams.get("sortBy") as SortOption) || "recent",
    page: parseInt(searchParams.get("page") || "1", 10),
    pageSize: parseInt(searchParams.get("pageSize") || "10", 10),
  };

  const updateFilters = useCallback(
    (updates: Partial<JobFiltersState>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "" || value === "all") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      // Reset page to 1 if filter criteria changed (and page wasn't explicitly set)
      if (!("page" in updates)) {
        params.delete("page");
      }

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [searchParams, router, pathname]
  );

  const setQuery = useCallback(
    (query: string) => updateFilters({ query }),
    [updateFilters]
  );

  const setLocation = useCallback(
    (location: string) => updateFilters({ location }),
    [updateFilters]
  );

  const setWorkplaceType = useCallback(
    (workplaceType: WorkplaceType | "all") => updateFilters({ workplaceType }),
    [updateFilters]
  );

  const setSeniority = useCallback(
    (seniority: SeniorityLevel | "all") => updateFilters({ seniority }),
    [updateFilters]
  );

  const setTechnology = useCallback(
    (technology: string | "all") => updateFilters({ technology }),
    [updateFilters]
  );

  const setSortBy = useCallback(
    (sortBy: SortOption) => updateFilters({ sortBy }),
    [updateFilters]
  );

  const setPage = useCallback(
    (page: number) => updateFilters({ page }),
    [updateFilters]
  );

  const resetFilters = useCallback(() => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  }, [router, pathname]);

  return {
    filters: currentFilters,
    isPending,
    setQuery,
    setLocation,
    setWorkplaceType,
    setSeniority,
    setTechnology,
    setSortBy,
    setPage,
    resetFilters,
  };
}

