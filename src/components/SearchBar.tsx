"use client";

import { useState, useEffect } from "react";
import { debounce } from "lodash";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, 500);

  return (
    <input
      type="text"
      role="searchbox"
      aria-label="Buscar obras por título ou artista"
      placeholder="Buscar por título ou artista…"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e);
      }}
      className="p-2 border rounded-md w-full"
    />
  );
}
