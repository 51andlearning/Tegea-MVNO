const weeks = [
  { week: "Week 1", phase: "Phase 1", color: "bg-[#0369A1]", activity: "Programme kick-off. BRS discovery workshops (sessions 1 & 2). Stakeholder register agreed.", deliverable: "Workshop minutes; Project schedule" },
  { week: "Week 2", phase: "Phase 1", color: "bg-[#0369A1]", activity: "BRS compilation & internal review. Technical Specifications drafting commenced.", deliverable: "Draft BRS; Draft Technical Specs" },
  { week: "Week 3", phase: "Phase 1", color: "bg-[#0369A1]", activity: "Customer Journey Mapping workshop. DARE Model workshop. BRS & Tech Specs review sessions.", deliverable: "Draft Journey Maps; Draft DARE Model" },
  { week: "Week 4", phase: "Phase 1", color: "bg-[#0369A1]", activity: "Revision of all Phase 1 documents. Sign-off meetings. All Phase 1 deliverables formally executed.", deliverable: "✅ Signed BRS, Tech Specs, Journey Maps & DARE", milestone: true },
  { week: "Week 5", phase: "Phase 2", color: "bg-[#0F172A]", activity: "Platform staging configuration. Billing rate plans, bundles, subscriber management. RICA workflow configured.", deliverable: "Configured staging environment" },
  { week: "Week 6", phase: "Phase 2", color: "bg-[#0F172A]", activity: "Branded portal deployed in staging. Automated notifications. DM internal QA. Telgea UAT commenced.", deliverable: "✅ UAT sign-off report" },
  { week: "Week 7", phase: "Phase 2", color: "bg-[#0F172A]", activity: "MNO live network configuration. SIM card batch order placed. Telgea team training.", deliverable: "Live network activated; SIM cards ordered; Training completed" },
  { week: "Week 8", phase: "Phase 2", color: "bg-[#0F172A]", activity: "Go Live Readiness Review. Final checks. Go Live authorisation. Commercial launch to market.", deliverable: "🚀 Live MVNO service — Hypercare begins", milestone: true },
  { week: "Wk 9–10", phase: "Post-Launch", color: "bg-[#475569]", activity: "Two-week hypercare: intensive monitoring, rapid incident response, operational stabilisation.", deliverable: "Hypercare completion report; Baseline metrics" },
  { week: "Month 3+", phase: "Ongoing", color: "bg-[#94A3B8]", activity: "Regular operations: monthly reporting, account management reviews, subscriber growth, enhancements.", deliverable: "Monthly reports; Quarterly DARE reviews" },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Programme schedule
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Detailed Implementation Timeline
          </h2>
          <p className="font-body text-[#64748B] max-w-lg">
            Week-by-week from kick-off through Go Live to ongoing operations. All timelines are indicative
            and subject to confirmation at kick-off. Milestone dates depend on Telgea&apos;s timely
            sign-off on Phase 1 deliverables.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { color: "bg-[#0369A1]", label: "Phase 1 — Implementation Scoping" },
            { color: "bg-[#0F172A]", label: "Phase 2 — Implementation & Business Simulation" },
            { color: "bg-[#475569]", label: "Post-Launch Hypercare" },
            { color: "bg-[#94A3B8]", label: "Ongoing Operations" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5 text-xs font-body text-[#64748B]">
              <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Timeline table */}
        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-slate-200">
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A] w-20">Period</th>
                <th className="text-left py-3 px-3 font-heading font-semibold text-[#0F172A] w-28 hidden sm:table-cell">Phase</th>
                <th className="text-left py-3 px-3 font-heading font-semibold text-[#0F172A]">Key Activity</th>
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A] hidden md:table-cell">Deliverable / Milestone</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((row, i) => (
                <tr
                  key={row.week}
                  className={`border-b border-slate-100 last:border-0 ${
                    row.milestone ? "bg-sky-50" : i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 rounded-full flex-shrink-0 self-stretch ${row.color}`} />
                      <span className="font-heading font-semibold text-[#0F172A] text-xs whitespace-nowrap">{row.week}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 hidden sm:table-cell">
                    <span className={`inline-block text-white text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${row.color}`}>
                      {row.phase}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#334155] leading-relaxed">{row.activity}</td>
                  <td className="py-3 px-4 text-[#64748B] hidden md:table-cell leading-relaxed">
                    {row.deliverable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
