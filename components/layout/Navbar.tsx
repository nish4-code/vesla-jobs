"use client";

import React from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { navbarStyles } from "./styles";
import { SearchBar } from "./SearchBar";
import { useJobFilters } from "@/hooks/useJobFilters";

export function Navbar() {
  const { filters, setQuery, setLocation } = useJobFilters();

  const handleSearch = (q: string, loc: string) => {
    setQuery(q);
    setLocation(loc);
  };

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        {/* Left Section: Logo & Desktop Search */}
        <div className={navbarStyles.leftSection}>
          <Link href="/" className={navbarStyles.logoLink}>
            <div className={navbarStyles.logoIcon}>
              <span>V</span>
            </div>
            <span className={navbarStyles.logoTitle}>Vesla Jobs</span>
          </Link>

          {/* Desktop Integrated Search */}
          <div className={navbarStyles.searchSection}>
            <SearchBar
              initialQuery={filters.query}
              initialLocation={filters.location}
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* Right Section: Saved Jobs Link */}
        <div className={navbarStyles.rightSection}>
          <Link href="/?savedOnly=true" className={navbarStyles.savedLink}>
            <Bookmark className="w-4 h-4 text-slate-500" />
            <span>Guardados</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Row */}
      <div className="px-4 pb-2.5 md:hidden bg-white border-t border-slate-100 pt-2">
        <SearchBar
          initialQuery={filters.query}
          initialLocation={filters.location}
          onSearch={handleSearch}
        />
      </div>
    </header>
  );
}
