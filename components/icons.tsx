import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function cnSize(size?: number): { width?: number; height?: number } {
  if (!size) return {};
  return { width: size, height: size };
}

export function IconAdd({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconArrowRight({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconChevronDown({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconGrid({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </svg>
  );
}

export function IconCalendar({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function IconUsers({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconSettings({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.31-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.46.46 1.12.6 1.72.39.53-.19.96-.62 1.15-1.15V3a2 2 0 1 1 4 0v.09c.19.53.62.96 1.15 1.15.6.21 1.26.07 1.72-.39l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.12-.39 1.72.19.53.62.96 1.15 1.15H21a2 2 0 1 1 0 4h-.09c-.7 0-1.31.4-1.51 1z" />
    </svg>
  );
}

export function IconHeadphones({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

export function IconEye({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconThumbUp({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-3z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

export function IconMouse({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="5" />
      <path d="M12 6v4" />
    </svg>
  );
}

export function IconSearch({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-3.5-3.5" />
    </svg>
  );
}

export function IconBell({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

export function IconShare({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <path d="M12 16v6" />
      <path d="M8 20h8" />
      <path d="M16 6l-4-4-4 4" />
      <path d="M12 2v10" />
      <rect x="3" y="12" width="18" height="10" rx="2" />
    </svg>
  );
}

export function IconKebab({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...cnSize(size)} {...props}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

export function IconMedal({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...cnSize(size)} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" />
    </svg>
  );
}

export function IconDot({ size = 8, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 8 8" fill="currentColor" {...cnSize(size)} {...props}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

export default {
  IconAdd,
  IconArrowRight,
  IconChevronDown,
  IconGrid,
  IconCalendar,
  IconUsers,
  IconSettings,
  IconHeadphones,
  IconEye,
  IconThumbUp,
  IconMouse,
  IconSearch,
  IconBell,
  IconKebab,
  IconMedal,
  IconDot,
  IconShare,
};


