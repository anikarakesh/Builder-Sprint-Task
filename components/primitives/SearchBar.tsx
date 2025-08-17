"use client";

import { useState, useEffect, type FormEvent } from "react";

export type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  initialValue?: string;
};

export function SearchBar({ placeholder = "Search...", onSearch, className = "", initialValue = "" }: SearchBarProps) {
  const [value, setValue] = useState(initialValue);
  
  // Update local state when initialValue changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSearch?.(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 ${className}`} role="search">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full h-10 px-3 rounded-[var(--radius-md)] border border-[--color-neutral-300] bg-[--color-bg-white-0] text-[--color-neutral-900] placeholder-[--color-neutral-500] focus:outline-none focus:ring-2 focus:ring-[--color-primary-alpha-16]"
        role="searchbox"
      />
      <button
        type="submit"
        className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        aria-label="Search for properties"
      >
        Search
      </button>
    </form>
  );
}


