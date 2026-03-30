const stats = [
  { value: "100%+", label: "Mobile penetration", sub: "Active SIM card basis" },
  { value: "R100bn+", label: "Annual mobile revenue", sub: "South African market" },
  { value: "4 MNOs", label: "Offering MVNO wholesale", sub: "Vodacom, MTN, Cell C, Telkom" },
  { value: "ICASA", label: "Regulated MVNO framework", sub: "Established licensing pathway" },
];

const advantages = [
  { title: "Capital-efficient entry", desc: "No network infrastructure investment. Launch a fully operational mobile service for R250,000 vs tens of millions for a traditional operator." },
  { title: "Speed to market", desc: "Go Live in approximately 8 weeks from signature — faster than any direct MNO negotiation path for a new entrant." },
  { title: "DM handles all complexity", desc: "MNO relationships, RICA compliance, SIM logistics, billing, platform operations — all managed by DM. Telgea focuses on subscribers." },
  { title: "Proven commercial model", desc: "25% net margin at scale, break-even at ~4,808 active subscribers, with DM's commercial interest directly aligned with Telgea's growth." },
];

export default function MarketSection() {
  return (
    <section id="market" className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            The opportunity
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Market Opportunity
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            South Africa has one of the most developed mobile markets on the African continent —
            and one of the most accessible for MVNO operators, with an established regulatory
            framework and four wholesale-ready MNOs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-4 text-center">
              <p className="font-heading text-2xl font-extrabold text-[#0369A1]">{s.value}</p>
              <p className="font-heading text-sm font-semibold text-[#0F172A] mt-1">{s.label}</p>
              <p className="font-body text-xs text-[#64748B] mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Context text */}
        <div className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="font-heading font-bold text-[#0F172A] text-base mb-3">The MVNO Landscape</h3>
          <p className="font-body text-sm text-[#64748B] leading-relaxed mb-3">
            The South African MVNO market has grown steadily since ICASA formalised the licensing framework.
            Successful incumbent MVNOs demonstrate that brand-aligned, segment-specific mobile services
            can build material subscriber bases and generate strong returns — particularly where the MVNO
            operator brings existing customer relationships, distribution channels, or brand equity that an
            MNO cannot easily replicate.
          </p>
          <p className="font-body text-sm text-[#64748B] leading-relaxed">
            Consumer demand for affordable mobile data, innovative service bundles and brand-aligned
            telecommunications continues to drive SIM switching. This creates a fertile environment for
            MVNO entrants who offer compelling value propositions to specific customer segments.
          </p>
        </div>

        {/* Telgea opportunity */}
        <h3 className="font-heading font-bold text-[#0F172A] text-lg mb-4">
          The Opportunity for Telgea
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {advantages.map((a) => (
            <div key={a.title} className="flex items-start gap-3 bg-[#F8FAFC] rounded-xl border border-slate-200 p-4">
              <span className="w-8 h-8 rounded-lg bg-[#0369A1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#0369A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <p className="font-heading font-semibold text-[#0F172A] text-sm mb-1">{a.title}</p>
                <p className="font-body text-sm text-[#64748B] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
