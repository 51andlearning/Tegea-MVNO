const raciData = [
  { activity: "BRS Discovery Workshops", dm: "R", telgea: "A/C", mno: "—", notes: "DM leads; Telgea SMEs required" },
  { activity: "BRS Document — drafting", dm: "R", telgea: "C", mno: "—", notes: "Telgea reviews draft within 3 days" },
  { activity: "BRS — final sign-off", dm: "C", telgea: "A", mno: "—", notes: "Both parties sign" },
  { activity: "Technical Specifications", dm: "R", telgea: "C", mno: "C", notes: "MNO input required for network specs" },
  { activity: "Customer Journey Mapping", dm: "R", telgea: "A/C", mno: "—", notes: "DM leads; Telgea CX team required" },
  { activity: "DARE Model — facilitation", dm: "R", telgea: "A/C", mno: "—", notes: "DM leads; Telgea ops team required" },
  { activity: "Platform staging configuration", dm: "R/A", telgea: "I", mno: "—", notes: "DM technical team" },
  { activity: "Telgea UAT", dm: "C", telgea: "R/A", mno: "—", notes: "Telgea tests against Journey Maps" },
  { activity: "MNO live network configuration", dm: "R", telgea: "I", mno: "R/A", notes: "DM manages MNO relationship" },
  { activity: "SIM card procurement", dm: "R/A", telgea: "I", mno: "—", notes: "DM's established supply chain" },
  { activity: "Go Live authorisation", dm: "C", telgea: "A", mno: "C", notes: "Telgea project sponsor authorises" },
  { activity: "Subscriber onboarding (RICA)", dm: "R", telgea: "I", mno: "C", notes: "DM platform automates; MNO provisions" },
  { activity: "Platform 24/7 monitoring", dm: "R", telgea: "I", mno: "C", notes: "DM NOC monitors" },
  { activity: "Monthly billing & invoicing", dm: "R", telgea: "A", mno: "—", notes: "DM invoices; Telgea approves counts" },
  { activity: "Call centre operations", dm: "R (via CXG)", telgea: "I", mno: "—", notes: "CXG day-to-day; DM manages CXG" },
  { activity: "Marketing & subscriber acquisition", dm: "I", telgea: "R", mno: "—", notes: "DM provides data & reporting support" },
  { activity: "Pricing & tariff changes", dm: "C", telgea: "A/R", mno: "—", notes: "Telgea decides; DM implements" },
  { activity: "Regulatory compliance (RICA/POPIA)", dm: "R/A", telgea: "A", mno: "—", notes: "Joint accountability; DM leads ops" },
];

const raciColors: Record<string, string> = {
  "R": "bg-[#0369A1] text-white",
  "A": "bg-[#0F172A] text-white",
  "R/A": "bg-[#0369A1] text-white",
  "A/R": "bg-[#0F172A] text-white",
  "A/C": "bg-slate-600 text-white",
  "C": "bg-amber-100 text-amber-800",
  "I": "bg-slate-100 text-slate-600",
  "R (via CXG)": "bg-[#0369A1] text-white",
  "—": "text-slate-300",
};

export default function RACISection() {
  return (
    <section id="raci" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Governance
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Roles &amp; Responsibilities (RACI Matrix)
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            Defines the roles of each party across all key activities throughout both phases and in ongoing operations.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { code: "R", label: "Responsible — performs the work", cls: "bg-[#0369A1] text-white" },
            { code: "A", label: "Accountable — owns the outcome, signs off", cls: "bg-[#0F172A] text-white" },
            { code: "C", label: "Consulted — provides input or review", cls: "bg-amber-100 text-amber-800" },
            { code: "I", label: "Informed — receives updates", cls: "bg-slate-100 text-slate-600" },
          ].map((l) => (
            <div key={l.code} className="flex items-center gap-2 text-xs font-body text-[#64748B]">
              <span className={`w-6 h-6 rounded flex items-center justify-center font-heading font-bold text-xs ${l.cls}`}>{l.code}</span>
              <span>{l.label}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="bg-[#0F172A]">
                  <th className="text-left py-3 px-4 font-heading font-semibold text-white">Activity</th>
                  <th className="text-center py-3 px-3 font-heading font-semibold text-sky-400">DM</th>
                  <th className="text-center py-3 px-3 font-heading font-semibold text-sky-400">Telgea</th>
                  <th className="text-center py-3 px-3 font-heading font-semibold text-sky-400">MNO / CXG</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold text-slate-400 hidden lg:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {raciData.map((row, i) => (
                  <tr key={row.activity} className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"}`}>
                    <td className="py-3 px-4 font-medium text-[#0F172A]">{row.activity}</td>
                    {[row.dm, row.telgea, row.mno].map((val, ci) => (
                      <td key={ci} className="py-3 px-3 text-center">
                        <span className={`inline-flex items-center justify-center min-w-[2rem] h-6 rounded px-1.5 font-heading font-bold text-xs ${raciColors[val] || "text-slate-400"}`}>
                          {val}
                        </span>
                      </td>
                    ))}
                    <td className="py-3 px-4 text-xs text-[#64748B] hidden lg:table-cell leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
