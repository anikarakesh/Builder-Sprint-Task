import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-white/90"></div>
      
      <div className="relative mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-2xl p-2 -m-2 transition-all duration-300" aria-label="RealEstate - Go to homepage">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-900 font-black text-xl tracking-tight group-hover:text-slate-800 transition-colors duration-300">
                Real<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Estate</span>
              </span>
              <div className="text-xs text-slate-500 font-medium -mt-1">Premium Properties</div>
            </div>
          </Link>

          {/* Premium Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {[
              { href: "/buyers", label: "Properties", icon: "🏠" },
              { href: "/builder", label: "For Builders", icon: "🏗️" },
              { href: "/about", label: "About", icon: "ℹ️" },
              { href: "/contact", label: "Contact", icon: "📞" }
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="group relative px-4 py-2.5 text-slate-700 hover:text-slate-900 transition-all duration-300 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
              </Link>
            ))}
          </nav>

          {/* Premium CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/buyers" className="hidden md:block">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <Button 
                  variant="outline" 
                  className="relative bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 border border-white/50 hover:border-slate-200 rounded-xl px-6 py-2.5 font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  leftIcon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  }
                >
                  Find Property
                </Button>
              </div>
            </Link>
            
            <Link href="/builder">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <Button 
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                  leftIcon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  }
                >
                  List Property
                </Button>
              </div>
            </Link>
          </div>

          {/* Premium Mobile Menu Button */}
          <button 
            className="lg:hidden group relative p-3 text-slate-700 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl"
            aria-label="Open mobile menu"
            aria-expanded="false"
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


