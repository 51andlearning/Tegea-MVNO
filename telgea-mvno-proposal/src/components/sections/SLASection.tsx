const slas = [
  { metric: "Platform Availability", commitment: "99.9% per calendar month", measurement: "24/7 automated monitoring", remedy: "Service credit: 5% of monthly fee per 0.1% shortfall below target", priority: "green" },
  { metric: "New SIM Provisioning", commitment: "Activation within 4 hours of successful RICA registration", measurement: "Platform timestamp logs", remedy: "Investigation within 2 business hours; remediation report", priority: "green" },
  { metric: "Billing Accuracy", commitment: "99.95% of CDRs correctly rated", measurement: "Monthly CDR audit", remedy: "Credit for overbilled amounts; investigation report within 5 days", priority: "green" },
  { metric: "P1 — Platform Outage", commitment: "Acknowledge: 15 min. Resolve: 4 hours", measurement: "Support ticket timestamps", remedy: "Service credit where SLA not met; post-mortem within 48 hours", priority: "red" },
  { metric: "P2 — Major Degradation", commitment: "Acknowledge: 30 min. Resolve: 8 hours", measurement: "Support ticket timestamps", remedy: "Escalation every 2 hours; root cause report within 24 hours", priority: "amber" },
  { metric: "P3 — Minor Issue", commitment: "Acknowledge: 2 hours. Resolve: 2 business days", measurement: "Support ticket timestamps", remedy: "Standard support process; no financial credit", priority: "slate" },
  { metric: "RICA Processing", commitment: "Processed within 1 business hour of digital submission", measurement: "Platform timestamp", remedy: "Remediation report for any failures", priority: "green" },
  { metric: "Monthly Reporting Pack", commitment: "Delivered by 5th business day of following month", measurement: "Report delivery log", remedy: "Reschedule within 3 business days of missed delivery", priority: "slate" },
];

const priorityColors: Record<string, string> = {
  red: "bg-red-100 text-red-700 border-red-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  green: "bg-emerald-100 text-emerald-700 border-emerald-200",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function SLASection() {
  return (
    <section id="slas" className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Service commitments
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Service Level Agreements
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            DM commits to the following service levels. These SLAs will form a schedule to the comprehensive Master Services Agreement and are subject to refinement during Phase 1 scoping.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-slate-200">
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A]">Metric</th>
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A]">Commitment</th>
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A] hidden md:table-cell">Measurement</th>
                <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A] hidden lg:table-cell">Remedy / Escalation</th>
              </tr>
            </thead>
            <tbody>
              {slas.map((row, i) => (
                <tr key={row.metric} className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/40"}`}>
                  <td className="py-3 px-4">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border mb-1 ${priorityColors[row.priority]}`}>
                      {row.metric}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#334155] leading-relaxed font-semibold text-[#0F172A]">{row.commitment}</td>
                  <td className="py-3 px-4 text-[#64748B] hidden md:table-cell">{row.measurement}</td>
                  <td className="py-3 px-4 text-[#64748B] text-xs hidden lg:table-cell leading-relaxed">{row.remedy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-4">
            <p className="font-heading font-semibold text-[#0F172A] text-sm mb-2">Incident Management</p>
            <p className="font-body text-xs text-[#64748B] leading-relaxed">
              Every incident receives a unique reference number, acknowledgement within SLA timeframes, and regular status
              updates. P1 and P2 incidents trigger immediate escalation to DM senior management. Formal post-mortems and
              root cause analyses are conducted for all P1 and P2 incidents, shared with Telgea within 48 hours of resolution.
            </p>
          </div>
          <div className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-4">
            <p className="font-heading font-semibold text-[#0F172A] text-sm mb-2">SLA Exclusions</p>
            <p className="font-body text-xs text-[#64748B] leading-relaxed">
              SLAs do not apply where unavailability is caused by: MNO network outages, upstream ISP failures,
              force majeure events, actions by Telgea or Telgea&apos;s third-party integrations, scheduled maintenance
              within communicated windows, or failures of Telgea&apos;s own systems or connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
