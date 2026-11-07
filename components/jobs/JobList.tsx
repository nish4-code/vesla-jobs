"use client";

import React from "react";
import { SearchX } from "lucide-react";
import { Job } from "@/lib/types";
import { JobCard } from "./JobCard";
import { JobCardSkeleton } from "./JobCardSkeleton";
import { Pagination } from "./Pagination";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { jobListStyles } from "./styles";

interface JobListProps {
  jobs: Job[];
  totalJobs: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  activeJobId?: string | null;
  savedJobIds: string[];
  isLoading?: boolean;
  onSelectJob: (job: Job) => void;
  onToggleSaveJob: (jobId: string) => void;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
}

export function JobList({
  jobs,
  totalJobs,
  currentPage,
  totalPages,
  pageSize,
  activeJobId,
  savedJobIds,
  isLoading = false,
  onSelectJob,
  onToggleSaveJob,
  onPageChange,
  onResetFilters,
}: JobListProps) {
  if (isLoading) {
    return (
      <div className={jobListStyles.container}>
        <div className={jobListStyles.header}>
          <span className="text-slate-400">Actualizando ofertas...</span>
        </div>
        <ScrollArea className="flex-1 pr-2">
          <div className={jobListStyles.cardsContainer}>
            {[1, 2, 3, 4, 5].map((i) => (
              <JobCardSkeleton key={i} />
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className={jobListStyles.emptyState}>
        <SearchX className={jobListStyles.emptyIcon} />
        <h3 className={jobListStyles.emptyTitle}>No se encontraron empleos</h3>
        <p className={jobListStyles.emptyDescription}>
          Prueba cambiando los términos o restableciendo los filtros de búsqueda.
        </p>
        <Button variant="outline" size="sm" onClick={onResetFilters}>
          Restablecer filtros
        </Button>
      </div>
    );
  }

  return (
    <div className={jobListStyles.container}>
      {/* Top Header */}
      <div className={jobListStyles.header}>
        <span>
          <strong className="text-slate-900 font-semibold">{totalJobs}</strong> vacantes encontradas
        </span>
        <span className="text-slate-400">
          Pág. {currentPage} de {totalPages}
        </span>
      </div>

      {/* Cards Scroll Area */}
      <ScrollArea className="flex-1 pr-2">
        <div className={jobListStyles.cardsContainer}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isActive={activeJobId === job.id}
              isSaved={savedJobIds.includes(job.id)}
              onSelect={onSelectJob}
              onToggleSave={onToggleSaveJob}
            />
          ))}
        </div>
      </ScrollArea>

      {/* Pagination Footer */}
      <div className="pt-2 shrink-0">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalJobs}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
