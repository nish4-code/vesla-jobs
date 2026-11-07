"use client";

import React from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobSource } from "@/lib/types";
import { getPortalMeta } from "@/lib/utils/formatters";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ApplyButtonProps {
  sources: JobSource[];
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function ApplyButton({ sources, className, size = "default" }: ApplyButtonProps) {
  if (!sources || sources.length === 0) {
    return (
      <Button disabled size={size} className={className}>
        Postulaciones cerradas
      </Button>
    );
  }

  // Single source
  if (sources.length === 1) {
    const single = sources[0];
    const portal = getPortalMeta(single.portal_type);

    return (
      <Button
        size={size}
        onClick={() => window.open(single.url, "_blank", "noopener,noreferrer")}
        className={className}
      >
        <span>Postular en {portal.displayName}</span>
        <ExternalLink className="w-3.5 h-3.5 ml-1" />
      </Button>
    );
  }

  // Multiple sources using shadcn DropdownMenu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={size} className={`gap-1.5 ${className || ""}`}>
          <span>Postularse ({sources.length} portales)</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Elige un portal de postulación</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sources.map((src, index) => {
          const meta = getPortalMeta(src.portal_type);
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => window.open(src.url, "_blank", "noopener,noreferrer")}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>{meta.displayName}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
