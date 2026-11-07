"use client";

import React from "react";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { jobFiltersStyles } from "./styles";
import { useJobFilters } from "@/hooks/useJobFilters";
import { WorkplaceType, SeniorityLevel, SortOption } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function JobFilters() {
  const {
    filters,
    setWorkplaceType,
    setSeniority,
    setSortBy,
    resetFilters,
  } = useJobFilters();

  const hasActiveFilters =
    filters.query !== "" ||
    filters.location !== "" ||
    filters.workplaceType !== "all" ||
    filters.seniority !== "all" ||
    filters.sortBy !== "recent";

  return (
    <div className={jobFiltersStyles.toolbar}>
      <div className={jobFiltersStyles.wrapper}>
        {/* Left: Filter Selects */}
        <div className={jobFiltersStyles.controlsGroup}>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Filtros:</span>
          </div>

          {/* Modalidad Select */}
          <Select
            value={filters.workplaceType || "all"}
            onValueChange={(val) => setWorkplaceType(val as WorkplaceType | "all")}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Modalidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las modalidades</SelectItem>
              <SelectItem value="remote">Remoto</SelectItem>
              <SelectItem value="hybrid">Híbrido</SelectItem>
              <SelectItem value="on_site">Presencial</SelectItem>
            </SelectContent>
          </Select>

          {/* Seniority Select */}
          <Select
            value={filters.seniority || "all"}
            onValueChange={(val) => setSeniority(val as SeniorityLevel | "all")}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Experiencia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los niveles</SelectItem>
              <SelectItem value="trainee">Trainee / Practicante</SelectItem>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="mid">Semi-Senior</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="lead">Lead / Principal</SelectItem>
            </SelectContent>
          </Select>

          {/* Reset button */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className={jobFiltersStyles.clearButton}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restablecer</span>
            </Button>
          )}
        </div>

        {/* Right: Sorting Select */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-slate-400 font-medium">Ordenar:</span>
          <Select
            value={filters.sortBy || "recent"}
            onValueChange={(val) => setSortBy(val as SortOption)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Más recientes</SelectItem>
              <SelectItem value="salary">Mayor salario</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
