import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-float-particle [animation-delay:4s]"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400/25 rounded-full animate-float-particle [animation-delay:2s]"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Premium Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-40"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-white font-black text-2xl tracking-tight">
                  Real<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Estate</span>
                </span>
                <div className="text-blue-200 text-sm font-medium -mt-1">Premium Properties</div>
              </div>
            </div>
            
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md font-light">
              India's most sophisticated real estate platform connecting discerning buyers with 
              premium builders. Experience luxury property discovery like never before.
            </p>
            
            {/* Premium stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "500+", label: "Premium Properties" },
                { value: "25+", label: "Cities" },
                { value: "10K+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Premium Social Media */}
            <div className="flex gap-4">
              {[
                { name: "Twitter", icon: "𝕏", gradient: "from-slate-600 to-slate-700" },
                { name: "Facebook", icon: "📘", gradient: "from-blue-600 to-blue-700" },
                { name: "LinkedIn", icon: "💼", gradient: "from-blue-700 to-blue-800" },
                { name: "Instagram", icon: "📷", gradient: "from-purple-600 to-pink-600" }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="group relative w-12 h-12 rounded-2xl overflow-hidden"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className={`relative w-full h-full bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-xl shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Premium Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Buyers */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm">
                  🏠
                </div>
                <h3 className="font-black text-white text-lg">For Buyers</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { href: "/buyers", label: "Search Properties" },
                  { href: "/buyers?category=luxury", label: "Luxury Homes" },
                  { href: "/buyers?category=premium", label: "Premium Apartments" },
                  { href: "/financing", label: "Home Loans" },
                  { href: "/guides", label: "Buying Guide" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="group text-white/70 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-400/50 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Builders */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm">
                  🏗️
                </div>
                <h3 className="font-black text-white text-lg">For Builders</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { href: "/builder", label: "List Properties" },
                  { href: "/builder/dashboard", label: "Builder Dashboard" },
                  { href: "/builder/analytics", label: "Analytics" },
                  { href: "/builder/support", label: "Builder Support" },
                  { href: "/builder/pricing", label: "Pricing Plans" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="group text-white/70 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-purple-400/50 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-sm">
                  🏢
                </div>
                <h3 className="font-black text-white text-lg">Company</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/careers", label: "Careers" },
                  { href: "/press", label: "Press & Media" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/support", label: "Help Center" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="group text-white/70 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-green-400/50 rounded-full group-hover:bg-green-400 transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Premium Bottom Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl backdrop-blur-sm"></div>
          <div className="relative p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-white/80 font-medium">
                  © {currentYear} RealEstate. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                  {[
                    { icon: "🛡️", text: "RERA Certified" },
                    { icon: "🏆", text: "Award Winning" },
                    { icon: "✓", text: "Trusted Platform" }
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full">
                      <span className="text-xs">{badge.icon}</span>
                      <span className="text-xs text-white/70 font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                  { href: "/cookies", label: "Cookie Policy" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


