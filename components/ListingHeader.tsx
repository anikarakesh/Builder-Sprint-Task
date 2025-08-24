import React, { useCallback, useState } from "react";
import { IconAdd, IconSearch } from "./icons";

type Props = {
  placeholder?: string;
  defaultQuery?: string;
  onSearch?: (query: string) => void;
  onCreate?: () => void;
};

export default function ListingHeader({ placeholder = "Search...", defaultQuery = "", onSearch, onCreate }: Props) {
  const [query, setQuery] = useState<string>(defaultQuery);

  const handleSearch = useCallback(() => {
    onSearch?.(query.trim());
  }, [onSearch, query]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  }, [handleSearch]);
  return (
    <div className="bg-white px-8 py-5 border-b border-[#ebebeb] flex items-center gap-4">
      <div className="text-[18px] font-medium tracking-[-0.27px] text-neutral-900 flex-1">Welcome back to Realtor 👋🏻</div>
      <div className="relative">
        <input
          className="w-[360px] rounded-[10px] border border-[#ebebeb] shadow-sm pl-9 pr-3 py-2 text-[14px] outline-none"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <IconSearch className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5c5c5c]" />
      </div>
      <button onClick={() => onCreate?.()} className="inline-flex items-center gap-2 rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[10px] py-[10px] shadow-sm">
        <IconAdd className="size-5" />
        <span>Create Request</span>
      </button>
      <button onClick={handleSearch} className="hidden">Search</button>
    </div>
  );
}


