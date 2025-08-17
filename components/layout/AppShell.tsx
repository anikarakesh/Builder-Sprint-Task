import type { PropsWithChildren, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

export type AppShellProps = PropsWithChildren<{
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}>;

export function AppShell({ children, headerSlot, footerSlot }: AppShellProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <SkipLink />
      {headerSlot ?? <Header />}
      <main id="main-content" tabIndex={-1}>{children}</main>
      {footerSlot ?? <Footer />}
    </div>
  );
}


