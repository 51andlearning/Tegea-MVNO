import { Badge } from "@/components/ui/badge";

const highlights = [
  { label: "Once-off Setup", value: "R250,000", note: "ex VAT" },
  { label: "Net Margin", value: "25%", note: "at 5,000+ subs" },
  { label: "Break-even", value: "~4,808", note: "active subscribers" },
  { label: "Go Live", value: "~8 weeks", note: "from signature" },
];

export default function HeroSection() {
  return (
    <section id="executive-summary" className="bg-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {/* Top bar */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="font-heading font-semibold text-white text-base tracking-wide">
              Digital Mobile (Pty) Ltd &mdash; A DSG Company
            </p>
            <p className="text-slate-400 text-sm mt-0.5">
              www.mvne.co.za &nbsp;|&nbsp; www.dsg.co.za
            </p>
          </div>
          <Badge variant="outline" className="border-slate-500 text-slate-300 hover:bg-transparent">
            Confidential
          </Badge>
        </div>

        {/* Blue rule */}
        <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-8" />

        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
          Proposal for the Licensing<br className="hidden md:block" /> of the{" "}
          <span className="text-sky-400">DSG Digital Mobile Platform</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
          A light MVNO arrangement for{" "}
          <span className="text-white font-semibold">Telgea</span>
          {" "}— enabling a fully branded mobile service without the burden of network infrastructure.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {highlights.map((h) => (
            <div key={h.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-body text-xs text-slate-400 uppercase tracking-widest mb-1">{h.label}</p>
              <p className="font-heading text-2xl font-extrabold text-white">{h.value}</p>
              <p className="font-body text-xs text-sky-400 mt-0.5">{h.note}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href="/DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
            download="DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
            className="inline-flex items-center gap-2 bg-[#0369A1] hover:bg-[#025c8a] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Proposal (PDF)
          </a>
          <a
            href="#acceptance"
            className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50e27] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Accept Proposal
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400 pt-6 border-t border-slate-700">
          <span>Dated: 27 March 2026</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full" />
          <span>Valid Until: 26 April 2026</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full" />
          <span>Prepared by Digital Mobile (Pty) Ltd for Telgea</span>
        </div>
      </div>
    </section>
  );
}
