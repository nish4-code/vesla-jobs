"use client";

import React, { useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Job } from "@/lib/types";
import { JobDetail } from "./JobDetail";
import { Button } from "@/components/ui/button";

interface MobileJobSheetProps {
  job: Job | null;
  isOpen: boolean;
  isSaved?: boolean;
  onClose: () => void;
  onToggleSave?: (jobId: string) => void;
  onSelectTechnology?: (tech: string) => void;
}

export function MobileJobSheet({
  job,
  isOpen,
  isSaved,
  onClose,
  onToggleSave,
  onSelectTechnology,
}: MobileJobSheetProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-900/40 backdrop-blur-xs">
      <div className="relative flex-1 bg-[#f3f2ef] flex flex-col max-h-screen overflow-hidden">
        {/* Top bar with back button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#0a66c2]" />
            <span>Volver a las ofertas</span>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="h-8 w-8 text-slate-500"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Detail Content Scroller */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 pb-12">
          <JobDetail
            job={job}
            isSaved={isSaved}
            onToggleSave={onToggleSave}
            onSelectTechnology={onSelectTechnology}
          />
        </div>
      </div>
    </div>
  );
}

