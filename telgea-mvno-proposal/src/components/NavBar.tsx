"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "About DSG", href: "#about-dsg" },
  { label: "Platform", href: "#platform" },
  { label: "Market", href: "#market" },
  { label: "Scope", href: "#scope" },
  { label: "Timeline", href: "#timeline" },
  { label: "Commercial", href: "#commercial" },
  { label: "SLAs", href: "#slas" },
  { label: "RACI", href: "#raci" },
  { label: "Risk Register", href: "#risk" },
  { label: "Terms", href: "#terms" },
  { label: "Accept", href: "#acceptance" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-[76px] left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg" : "bg-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand mark */}
          <a
            href="#executive-summary"
            onClick={(e) => handleAnchor(e, "#executive-summary")}
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/images/digital-mobile-logo.png"
              alt="Digital Mobile"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchor(e, item.href)}
                className={`font-body text-xs font-medium px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  item.label === "Accept"
                    ? "bg-[#C8102E] text-white hover:bg-[#a50e27] font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: PDF download + hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
              download="DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
              className="inline-flex items-center gap-1.5 bg-[#0369A1] hover:bg-[#025c8a] text-white font-body font-semibold text-xs px-3 py-1.5 rounded-md transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            {/* Hamburger — mobile/tablet */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-t border-slate-700 px-4 py-3">
          <div className="grid grid-cols-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchor(e, item.href)}
                className={`font-body text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  item.label === "Accept"
                    ? "bg-[#C8102E] text-white hover:bg-[#a50e27] col-span-2 text-center"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
