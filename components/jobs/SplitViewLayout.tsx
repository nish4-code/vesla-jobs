"use client";

import React from "react";
import { Job } from "@/lib/types";
import { JobList } from "./JobList";
import { JobDetail } from "./JobDetail";
import { MobileJobSheet } from "./MobileJobSheet";
import { useJobList } from "@/hooks/useJobList";
import { useJobFilters } from "@/hooks/useJobFilters";

interface SplitViewLayoutProps {
  jobs: Job[];
  totalJobs: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

export function SplitViewLayout({
  jobs,
  totalJobs,
  currentPage,
  totalPages,
  pageSize,
}: SplitViewLayoutProps) {
  const {
    activeJob,
    savedJobIds,
    isMobileDetailOpen,
    selectJob,
    toggleSaveJob,
    closeMobileDetail,
  } = useJobList(jobs);

  const {
    setTechnology,
    setPage,
    resetFilters,
    isPending,
  } = useJobFilters();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex-1 h-[calc(100vh-108px)] flex flex-col min-h-0">
      {/* Full-width Split View Layout (no empty side margins) */}
      <div className="flex flex-col lg:flex-row gap-5 h-full w-full min-h-0">
        {/* Left Column: Job Cards List (fixed comfortable card width) */}
        <section className="w-full lg:w-[420px] xl:w-[460px] 2xl:w-[480px] shrink-0 h-full min-h-0 flex flex-col">
          <JobList
            jobs={jobs}
            totalJobs={totalJobs}
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            activeJobId={activeJob?.id}
            savedJobIds={savedJobIds}
            isLoading={isPending}
            onSelectJob={selectJob}
            onToggleSaveJob={toggleSaveJob}
            onPageChange={setPage}
            onResetFilters={resetFilters}
          />
        </section>

        {/* Right Column: Sticky Job Detail (expands to fill all remaining screen width) */}
        <aside className="hidden lg:flex flex-1 min-w-0 h-full min-h-0 flex-col">
          <JobDetail
            job={activeJob}
            isSaved={activeJob ? savedJobIds.includes(activeJob.id) : false}
            onToggleSave={toggleSaveJob}
            onSelectTechnology={setTechnology}
          />
        </aside>
      </div>

      {/* Mobile Drawer/Sheet when a job is clicked on small screens */}
      <MobileJobSheet
        job={activeJob}
        isOpen={isMobileDetailOpen}
        isSaved={activeJob ? savedJobIds.includes(activeJob.id) : false}
        onClose={closeMobileDetail}
        onToggleSave={toggleSaveJob}
        onSelectTechnology={(tech) => {
          setTechnology(tech);
          closeMobileDetail();
        }}
      />
    </div>
  );
}
