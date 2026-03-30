const risks = [
  { category: "Technical", risk: "MNO network configuration delays extend Go Live timeline", likelihood: "Medium", impact: "High", rating: "HIGH", mitigation: "DM maintains dedicated MNO escalation contacts. MNO engagement initiated in Week 1 of Phase 1. Weekly tracking against MNO delivery milestones." },
  { category: "Technical", risk: "Platform defects discovered during Telgea UAT", likelihood: "Low", impact: "Medium", rating: "MEDIUM", mitigation: "Comprehensive DM internal QA before UAT. Defined defect resolution SLAs. Staging environment mirrors live configuration." },
  { category: "Technical", risk: "SIM card supply chain disruption or delays", likelihood: "Low", impact: "Medium", rating: "MEDIUM", mitigation: "SIM orders placed in Week 5. Multiple supplier relationships maintained. Buffer stock policy in place." },
  { category: "Commercial", risk: "Subscriber acquisition below break-even at R75,000/month minimum fee", likelihood: "Medium", impact: "High", rating: "HIGH", mitigation: "DM actively supports Telgea's go-to-market strategy with data insights and distribution channel support." },
  { category: "Commercial", risk: "Wholesale cost increases by MNO impacting margin", likelihood: "Low", impact: "Medium", rating: "MEDIUM", mitigation: "DM's established MNO relationships and volumes provide pricing stability. 30-day notice required for any price adjustments." },
  { category: "Regulatory", risk: "RICA non-compliance or audit findings", likelihood: "Low", impact: "High", rating: "MEDIUM", mitigation: "DM's Paperless RICA module is fully ICASA-compliant. Regular compliance audits and automated reporting." },
  { category: "Operational", risk: "Key DM personnel attrition affecting service continuity", likelihood: "Low", impact: "Medium", rating: "MEDIUM", mitigation: "Documented operational runbooks for all processes. Cross-training of team members. Account continuity commitment in comprehensive contract." },
  { category: "Operational", risk: "Telgea stakeholder changes delay sign-offs and approvals", likelihood: "Medium", impact: "Medium", rating: "MEDIUM", mitigation: "Sign-off accountabilities confirmed at kick-off. 5-day sign-off SLA in DARE Model. Formal escalation process defined." },
];

const ratingColors: Record<string, string> = {
  "HIGH": "bg-red-100 text-red-700 border border-red-200",
  "MEDIUM": "bg-amber-100 text-amber-700 border border-amber-200",
  "LOW": "bg-emerald-100 text-emerald-700 border border-emerald-200",
};

const catColors: Record<string, string> = {
  "Technical": "bg-[#0369A1]/10 text-[#0369A1]",
  "Commercial": "bg-purple-100 text-purple-700",
  "Regulatory": "bg-amber-100 text-amber-700",
  "Operational": "bg-slate-100 text-slate-600",
};

export default function RiskSection() {
  return (
    <section id="risk" className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Risk management
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Risk Register
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            Key risks across technical, commercial, regulatory and operational dimensions.
            DM includes a formal risk review as a standing agenda item in all monthly account management meetings.
          </p>
        </div>

        <div className="space-y-3">
          {risks.map((row) => (
            <div key={row.risk} className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColors[row.category]}`}>{row.category}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ratingColors[row.rating]}`}>{row.rating} RISK</span>
                <span className="text-xs text-[#64748B]">Likelihood: {row.likelihood} · Impact: {row.impact}</span>
              </div>
              <p className="font-heading font-semibold text-[#0F172A] text-sm mb-2">{row.risk}</p>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="font-body text-sm text-[#64748B] leading-relaxed">{row.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
