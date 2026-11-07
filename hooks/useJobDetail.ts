"use client";

import { useState, useCallback } from "react";
import { Job } from "@/lib/types";

export type DetailTab = "description" | "requirements" | "benefits";

export function useJobDetail(job: Job | null) {
  const [activeTab, setActiveTab] = useState<DetailTab>("description");
  const [isCopied, setIsCopied] = useState(false);
  const [isApplyMenuOpen, setIsApplyMenuOpen] = useState(false);

  const copyShareLink = useCallback(() => {
    if (!job) return;
    const url = `${window.location.origin}/job/${job.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  }, [job]);

  const toggleApplyMenu = useCallback(() => {
    setIsApplyMenuOpen((prev) => !prev);
  }, []);

  const closeApplyMenu = useCallback(() => {
    setIsApplyMenuOpen(false);
  }, []);

  return {
    activeTab,
    setActiveTab,
    isCopied,
    isApplyMenuOpen,
    copyShareLink,
    toggleApplyMenu,
    closeApplyMenu,
  };
}

