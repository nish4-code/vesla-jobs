import React, { Suspense } from "react";
import { getJobs } from "@/services/jobService";
import { Navbar } from "@/components/layout/Navbar";
import { JobFilters } from "@/components/jobs/JobFilters";
import { SplitViewLayout } from "@/components/jobs/SplitViewLayout";
import { JobCardSkeleton } from "@/components/jobs/JobCardSkeleton";
import { WorkplaceType, SeniorityLevel, SortOption } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function FeedSkeleton() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex-1 h-[calc(100vh-108px)]">
      <div className="flex flex-col lg:flex-row gap-5 h-full w-full">
        {/* Left column skeletons matching JobCard 1:1 */}
        <div className="w-full lg:w-[420px] xl:w-[460px] 2xl:w-[480px] shrink-0 space-y-2.5 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 text-xs text-slate-400 font-medium px-1">
            <Skeleton className="h-4 w-36 rounded" />
            <Skeleton className="h-4 w-20 rounded" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>

        {/* Right column detail skeleton */}
        <div className="hidden lg:flex flex-1 min-w-0">
          <div className="p-6 rounded-lg border border-slate-200 bg-white space-y-4 w-full h-full">
            <div className="flex items-center gap-3">
              <Skeleton className="w-11 h-11 rounded-lg shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/4 rounded" />
                <Skeleton className="h-3 w-1/3 rounded" />
              </div>
            </div>
            <Skeleton className="h-7 w-2/3 rounded" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-32 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

async function JobsFeed({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;

  const query = typeof resolvedParams.query === "string" ? resolvedParams.query : "";
  const location = typeof resolvedParams.location === "string" ? resolvedParams.location : "";
  const workplaceType = (typeof resolvedParams.workplaceType === "string"
    ? resolvedParams.workplaceType
    : "all") as WorkplaceType | "all";
  const seniority = (typeof resolvedParams.seniority === "string"
    ? resolvedParams.seniority
    : "all") as SeniorityLevel | "all";
  const technology = typeof resolvedParams.technology === "string" ? resolvedParams.technology : "all";
  const sortBy = (typeof resolvedParams.sortBy === "string"
    ? resolvedParams.sortBy
    : "recent") as SortOption;
  const page = parseInt(
    typeof resolvedParams.page === "string" ? resolvedParams.page : "1",
    10
  );
  const pageSize = 10;

  const result = await getJobs({
    query,
    location,
    workplaceType,
    seniority,
    technology,
    sortBy,
    page: isNaN(page) || page < 1 ? 1 : page,
    pageSize,
  });

  return (
    <SplitViewLayout
      jobs={result.data}
      totalJobs={result.total}
      currentPage={result.page}
      totalPages={result.totalPages}
      pageSize={result.pageSize}
    />
  );
}

export default function HomePage({ searchParams }: PageProps) {
  return (
    <div className="h-screen flex flex-col bg-[#f3f2ef] overflow-hidden">
      {/* Top Navbar */}
      <Suspense fallback={<div className="h-14 bg-white border-b border-slate-200 shrink-0" />}>
        <Navbar />
      </Suspense>

      {/* Filter Toolbar */}
      <Suspense fallback={<div className="h-10 bg-white border-b border-slate-200 shrink-0" />}>
        <JobFilters />
      </Suspense>

      {/* Main Split-View Content */}
      <main className="flex-1 min-h-0 flex flex-col">
        <Suspense fallback={<FeedSkeleton />}>
          <JobsFeed searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  );
}
