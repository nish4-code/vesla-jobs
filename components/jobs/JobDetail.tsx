"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Bookmark,
  Share2,
  Check,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Job } from "@/lib/types";
import {
  formatSalary,
  formatRelativeTime,
  getWorkplaceLabel,
  getSeniorityLabel,
  getCompanyInitials,
  getCompanyAvatarColor,
  getCleanCompanyName,
  getPortalMeta,
} from "@/lib/utils/formatters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ApplyButton } from "./ApplyButton";
import { jobDetailStyles } from "./styles";
import { useJobDetail } from "@/hooks/useJobDetail";

interface JobDetailProps {
  job: Job | null;
  isSaved?: boolean;
  onToggleSave?: (jobId: string) => void;
  onSelectTechnology?: (tech: string) => void;
}

export function JobDetail({
  job,
  isSaved = false,
  onToggleSave,
  onSelectTechnology,
}: JobDetailProps) {
  const { isCopied, copyShareLink } = useJobDetail(job);

  if (!job) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-12 text-center text-slate-400 h-full flex flex-col items-center justify-center">
        <Briefcase className="w-10 h-10 text-slate-300 mb-2" />
        <p className="text-sm font-semibold text-slate-700">Selecciona una vacante</p>
        <p className="text-xs text-slate-500 mt-1 max-w-xs">
          Haz clic en cualquier oferta de la lista para ver su descripción completa y postularte.
        </p>
      </div>
    );
  }

  const cleanCompany = getCleanCompanyName(job.company_name);
  const avatarBg = getCompanyAvatarColor(cleanCompany);
  const initials = getCompanyInitials(cleanCompany);
  const relativeTime = formatRelativeTime(job.published_at);
  const workplaceText = getWorkplaceLabel(job.workplace_type);
  const seniorityText = getSeniorityLabel(job.seniority_level);
  const salaryText = formatSalary(
    job.salary_min,
    job.salary_max,
    job.salary_currency,
    job.salary_period
  );

  return (
    <article className={jobDetailStyles.container}>
      <div className={jobDetailStyles.scrollArea}>
        {/* Header Section */}
        <div className={jobDetailStyles.header}>
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border border-slate-200 ${avatarBg}`}>
              <span>{initials}</span>
            </div>
            <div>
              <h2 className={jobDetailStyles.companyName}>{cleanCompany}</h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" />
                  {relativeTime}
                </span>
              </div>
            </div>
          </div>

          <h1 className={jobDetailStyles.title}>{job.title}</h1>

          {/* Action Buttons */}
          <div className={jobDetailStyles.actionsRow}>
            <ApplyButton sources={job.sources} size="default" />

            {onToggleSave && (
              <Button
                variant="outline"
                size="default"
                onClick={() => onToggleSave(job.id)}
                className="gap-1.5"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    isSaved ? "text-[#0a66c2] fill-[#0a66c2]" : "text-slate-600"
                  }`}
                />
                <span>{isSaved ? "Guardada" : "Guardar"}</span>
              </Button>
            )}

            <Button
              variant="outline"
              size="default"
              onClick={copyShareLink}
              className="gap-1.5"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copiado</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>Compartir</span>
                </>
              )}
            </Button>
          </div>
        </div>

        <Separator />

        {/* 3-Column Key Highlights */}
        <div className={jobDetailStyles.highlightsGrid}>
          <div className={jobDetailStyles.highlightItem}>
            <span className={jobDetailStyles.highlightLabel}>Compensación</span>
            <p className={jobDetailStyles.highlightValue}>{salaryText}</p>
          </div>
          <div className={jobDetailStyles.highlightItem}>
            <span className={jobDetailStyles.highlightLabel}>Modalidad</span>
            <p className={jobDetailStyles.highlightValue}>{workplaceText}</p>
          </div>
          <div className={jobDetailStyles.highlightItem}>
            <span className={jobDetailStyles.highlightLabel}>Nivel Requerido</span>
            <p className={jobDetailStyles.highlightValue}>{seniorityText}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className={jobDetailStyles.sectionTitle}>Tecnologías clave</h4>
          <div className={jobDetailStyles.techGrid}>
            {job.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                onClick={() => onSelectTechnology?.(tech)}
                className="cursor-pointer hover:bg-slate-200 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Radix Tabs: Descripción, Requisitos, Beneficios */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList>
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="requirements">Requisitos ({job.requirements.length})</TabsTrigger>
            <TabsTrigger value="benefits">Beneficios ({job.benefits.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-3">
            <div className={jobDetailStyles.prose}>
              {job.description}
            </div>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Responsabilidades:
                </h4>
                <ul className={jobDetailStyles.list}>
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className={jobDetailStyles.listItem}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a66c2] mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="requirements" className="mt-3">
            <ul className={jobDetailStyles.list}>
              {job.requirements.map((req, i) => (
                <li key={i} className={jobDetailStyles.listItem}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a66c2] mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="benefits" className="mt-3">
            <ul className={jobDetailStyles.list}>
              {job.benefits.map((benefit, i) => (
                <li key={i} className={jobDetailStyles.listItem}>
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        {/* Discreet Sources Footer */}
        <div className={jobDetailStyles.sourcesFooter}>
          <span className="text-slate-500 text-xs">
            Disponible en:
          </span>
          <div className="flex items-center gap-1.5">
            {job.sources.map((src, i) => {
              const meta = getPortalMeta(src.portal_type);
              return (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0a66c2] hover:underline"
                >
                  {meta.displayName} ↗
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
