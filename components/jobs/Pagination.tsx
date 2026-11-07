"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { paginationStyles } from "./styles";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Generate page numbers to show
  const pageNumbers: number[] = [];
  const maxButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Paginación" className={paginationStyles.container}>
      <span className={paginationStyles.stats}>
        Mostrando <strong className="font-semibold text-slate-800">{startItem}-{endItem}</strong> de{" "}
        <strong className="font-semibold text-slate-800">{totalItems}</strong> vacantes
      </span>

      <div className={paginationStyles.controls}>
        {/* Previous */}
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Página anterior"
          className="h-8 px-2.5"
        >
          <ChevronLeft className="w-4 h-4 mr-0.5" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>

        {/* Page numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`${paginationStyles.pageButton} ${
              currentPage === page
                ? paginationStyles.activePage
                : paginationStyles.inactivePage
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Página siguiente"
          className="h-8 px-2.5"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-4 h-4 ml-0.5" />
        </Button>
      </div>
    </nav>
  );
}
