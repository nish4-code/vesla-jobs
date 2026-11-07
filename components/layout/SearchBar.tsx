"use client";

import React, { useState } from "react";
import { Search, MapPin, X } from "lucide-react";
import { searchBarStyles } from "./styles";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch: (query: string, location: string) => void;
  className?: string;
}

export function SearchBar({
  initialQuery = "",
  initialLocation = "",
  onSearch,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  const [prevInitialQuery, setPrevInitialQuery] = useState(initialQuery);
  const [prevInitialLocation, setPrevInitialLocation] = useState(initialLocation);

  if (initialQuery !== prevInitialQuery) {
    setPrevInitialQuery(initialQuery);
    setQuery(initialQuery);
  }

  if (initialLocation !== prevInitialLocation) {
    setPrevInitialLocation(initialLocation);
    setLocation(initialLocation);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  const clearQuery = () => {
    setQuery("");
    onSearch("", location);
  };

  const clearLocation = () => {
    setLocation("");
    onSearch(query, "");
  };

  return (
    <form onSubmit={handleSubmit} className={`${searchBarStyles.form} ${className || ""}`}>
      {/* Query Input */}
      <div className={searchBarStyles.inputWrapper}>
        <Search className={searchBarStyles.inputIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cargo, tecnología o empresa (ej. React, Python)"
          className={searchBarStyles.inputField}
        />
        {query && (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Limpiar cargo"
            className={searchBarStyles.clearButton}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className={searchBarStyles.divider} />

      {/* Location Input */}
      <div className={searchBarStyles.inputWrapper}>
        <MapPin className={searchBarStyles.inputIcon} />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ciudad, país o Remoto"
          className={searchBarStyles.inputField}
        />
        {location && (
          <button
            type="button"
            onClick={clearLocation}
            aria-label="Limpiar ubicación"
            className={searchBarStyles.clearButton}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="sm"
        className={searchBarStyles.submitButton}
      >
        Buscar
      </Button>
    </form>
  );
}
