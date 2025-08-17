import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export function Header() {
  return (
    <header className="border-b border-[--color-neutral-200] bg-[--color-bg-white-0] sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[--color-primary-base] rounded-[--radius-md] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
          <span className="text-[--color-neutral-900] font-bold text-lg">RealEstate</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/buyers" 
            className="text-[--color-neutral-700] hover:text-[--color-primary-base] transition-colors font-medium"
          >
            Properties
          </Link>
          <Link 
            href="/builders" 
            className="text-[--color-neutral-700] hover:text-[--color-primary-base] transition-colors font-medium"
          >
            For Builders
          </Link>
          <Link 
            href="/about" 
            className="text-[--color-neutral-700] hover:text-[--color-primary-base] transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-[--color-neutral-700] hover:text-[--color-primary-base] transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/buyers" className="hidden sm:block">
            <Button variant="outline" color="blue" className="h-9 px-4 text-sm">
              Find Property
            </Button>
          </Link>
          <Link href="/builders">
            <Button variant="primary" color="blue" className="h-9 px-4 text-sm">
              List Property
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-[--color-neutral-700]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}


