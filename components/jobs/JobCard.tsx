"use client";

import React from "react";
import { Bookmark, MapPin } from "lucide-react";
import { Job } from "@/lib/types";
import {
  formatSalary,
  formatRelativeTime,
  getWorkplaceLabel,
  getCompanyInitials,
  getCompanyAvatarColor,
  getCleanCompanyName,
  getPortalMeta,
} from "@/lib/utils/formatters";
import { Badge } from "@/components/ui/badge";
import { jobCardStyles } from "./styles";

interface JobCardProps {
  job: Job;
  isActive?: boolean;
  isSaved?: boolean;
  onSelect: (job: Job) => void;
  onToggleSave: (jobId: string) => void;
}

export function JobCard({
  job,
  isActive = false,
  isSaved = false,
  onSelect,
  onToggleSave,
}: JobCardProps) {
  const cleanCompany = getCleanCompanyName(job.company_name);
  const avatarBg = getCompanyAvatarColor(cleanCompany);
  const initials = getCompanyInitials(cleanCompany);
  const relativeTime = formatRelativeTime(job.published_at);
  const workplaceText = getWorkplaceLabel(job.workplace_type);
  const salaryText = formatSalary(
    job.salary_min,
    job.salary_max,
    job.salary_currency,
    job.salary_period
  );

  const handleCardClick = () => {
    onSelect(job);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSave(job.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`${jobCardStyles.cardBase} ${
        isActive ? jobCardStyles.cardActive : jobCardStyles.cardInactive
      }`}
    >
      {/* Header: Avatar + Title & Company + Save Button */}
      <div className={jobCardStyles.header}>
        <div className={jobCardStyles.companyInfo}>
          <div className={`${jobCardStyles.avatar} ${avatarBg}`}>
            <span>{initials}</span>
          </div>

          <div className={jobCardStyles.titleWrapper}>
            <h3 className={jobCardStyles.title}>{job.title}</h3>
            <p className={jobCardStyles.companyName}>{cleanCompany}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSaveClick}
          aria-label={isSaved ? "Quitar de guardados" : "Guardar empleo"}
          className={jobCardStyles.saveButton}
        >
          <Bookmark
            className={`w-3.5 h-3.5 transition-colors ${
              isSaved ? jobCardStyles.savedIcon : ""
            }`}
          />
        </button>
      </div>

      {/* Meta: Location & Workplace */}
      <div className={jobCardStyles.metaLine}>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          {job.location}
        </span>
        <span>•</span>
        <Badge
          variant={
            job.workplace_type === "remote"
              ? "remote"
              : job.workplace_type === "hybrid"
              ? "hybrid"
              : "onsite"
          }
          className="text-[10px] px-1.5 py-0"
        >
          {workplaceText}
        </Badge>
      </div>

      {/* Salary if available */}
      {job.salary_min && (
        <div className="text-xs font-semibold text-slate-800 mb-2">
          {salaryText}
        </div>
      )}

      {/* Footer: Date and primary portal source */}
      <div className={jobCardStyles.footerRow}>
        <span>{relativeTime}</span>
        <div className={jobCardStyles.sourcesBadges}>
          {job.sources.slice(0, 2).map((src, i) => {
            const meta = getPortalMeta(src.portal_type);
            return (
              <span
                key={i}
                className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200"
              >
                {meta.displayName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
