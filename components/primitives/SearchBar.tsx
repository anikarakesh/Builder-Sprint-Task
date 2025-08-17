"use client";

import { useState, type FormEvent } from "react";

export type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
};

export function SearchBar({ placeholder = "Search...", onSearch, className = "" }: SearchBarProps) {
  const [value, setValue] = useState("");

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
      />
      <button
        type="submit"
        className="h-10 px-3 rounded-[var(--radius-md)] bg-[--color-primary-base] text-[--color-static-white] text-sm hover:bg-[color:rgb(59_130_246_/_.9)]"
      >
        Search
      </button>
    </form>
  );
}


