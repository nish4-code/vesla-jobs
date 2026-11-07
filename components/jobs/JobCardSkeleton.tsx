import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function JobCardSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3.5 transition-all select-none">
      {/* Header: Avatar + Title & Company + Save Button */}
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <Skeleton className="w-10 h-10 rounded-md shrink-0" />
          <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
            <Skeleton className="h-4 w-4/5 rounded" />
            <Skeleton className="h-3 w-1/2 rounded" />
          </div>
        </div>
        <Skeleton className="w-4 h-4 rounded shrink-0 mt-1" />
      </div>

      {/* Meta Line: Location + Badge */}
      <div className="flex items-center gap-2 mb-2">
        <Skeleton className="h-3 w-28 rounded" />
        <span className="text-slate-300">•</span>
        <Skeleton className="h-4 w-16 rounded-md" />
      </div>

      {/* Salary Line */}
      <div className="mb-2">
        <Skeleton className="h-3.5 w-44 rounded" />
      </div>

      {/* Footer: Date and Portal Badge */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <Skeleton className="h-3 w-20 rounded" />
        <Skeleton className="h-4 w-20 rounded" />
      </div>
    </div>
  );
}

