import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const profitRows = [
  { metric: "Revenue (ARPU R100)", v1k: "R 100,000", v5k: "R 500,000", v10k: "R 1,000,000", v25k: "R 2,500,000", type: "revenue" },
  { metric: "Less: MNO Wholesale", v1k: "(R 50,000)", v5k: "(R 250,000)", v10k: "(R 500,000)", v25k: "(R 1,250,000)", type: "cost" },
  { metric: "Less: DM Platform Fee", v1k: "(R 75,000)", v5k: "(R 75,000)", v10k: "(R 150,000)", v25k: "(R 375,000)", type: "cost" },
  { metric: "Less: Call Centre (R3/sub)", v1k: "(R 3,000)", v5k: "(R 15,000)", v10k: "(R 30,000)", v25k: "(R 75,000)", type: "cost" },
  { metric: "Less: Airtime Dist. (R7/sub)", v1k: "(R 7,000)", v5k: "(R 35,000)", v10k: "(R 70,000)", v25k: "(R 175,000)", type: "cost" },
  { metric: "Net Profit (Monthly)", v1k: "(R 35,000)", v5k: "R 125,000", v10k: "R 250,000", v25k: "R 625,000", type: "total" },
  { metric: "Net Margin", v1k: "Loss", v5k: "25.0%", v10k: "25.0%", v25k: "25.0%", type: "margin" },
];

const otherServices = [
  { service: "Telgea Network Name", cost: "R 250,000", resp: "Telgea", note: "MNO network name registration; branding cost" },
  { service: "Call Centre (CXG/DM)", cost: "R 3 per sub/month", resp: "DM", note: "Included in profit model" },
  { service: "Logistics (SIM delivery)", cost: "R 40 per SIM", resp: "DM", note: "Per delivery event; courier required" },
  { service: "Airtime Distribution", cost: "R 7 per sub/month", resp: "DM", note: "Via DM's retail & distribution channels" },
  { service: "SIM Card Costs", cost: "R 12 per SIM", resp: "DM", note: "Per personalised SIM card issued" },
  { service: "Paperless RICA", cost: "R 21 per SIM", resp: "DM", note: "Per digital RICA registration" },
  { service: "Web Development", cost: "By quotation", resp: "Telgea / DM", note: "DM white-label option available" },
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Pricing &amp; fees
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Commercial Terms
          </h2>
          <p className="font-body text-[#64748B] max-w-lg">
            Transparent pricing aligned with Telgea&apos;s growth — once-off setup plus monthly subscriber-based fees from Go Live.
          </p>
        </div>

        {/* Setup fee highlight */}
        <div className="bg-[#0F172A] rounded-xl p-px mb-8">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#0c2a4a] rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-body text-sky-400 text-xs uppercase tracking-widest font-semibold mb-2">Once-off Setup Fee</p>
              <p className="font-heading text-5xl font-extrabold text-white tracking-tight">R250,000</p>
              <p className="font-body text-slate-400 text-sm mt-2">Payable within 3 business days of signing, before Phase 1 commences</p>
              <p className="font-body text-slate-500 text-xs mt-3 max-w-sm">
                Covers full two-phase implementation: BRS, Tech Specs, Journey Maps, DARE Model, platform config,
                portal deployment, integration testing, SIM personalisation, training, Go Live support &amp; 2-week hypercare.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block bg-[#0369A1] text-white font-heading font-semibold text-sm px-4 py-2 rounded-full tracking-wide">Ex VAT</span>
            </div>
          </div>
        </div>

        {/* Monthly fee highlight */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-body text-xs text-[#0369A1] uppercase tracking-widest font-semibold mb-1">Monthly Management &amp; Platform Fee</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-heading text-3xl font-extrabold text-[#0F172A]">R15 / active subscriber</span>
              <span className="font-body text-[#64748B] text-sm">or R75,000/month — whichever is higher</span>
            </div>
            <p className="font-body text-xs text-[#64748B] mt-2">
              Minimum fee equivalent to 5,000 active subscribers. Above 5,000 the per-subscriber rate applies, scaling proportionately with Telgea&apos;s growth — aligning DM&apos;s commercial interest with Telgea&apos;s.
            </p>
          </div>
          <div className="flex-shrink-0 bg-[#F8FAFC] rounded-xl p-4 text-center border border-slate-200">
            <p className="font-body text-xs text-[#64748B] uppercase tracking-wide mb-1">Includes</p>
            <p className="font-heading text-sm font-bold text-[#0F172A]">Platform hosting &amp; maintenance</p>
            <p className="font-body text-xs text-[#64748B]">Second-line support · Analytics portal · Monthly account review</p>
          </div>
        </div>

        <Tabs defaultValue="profit">
          <TabsList className="mb-6 bg-white border border-slate-200 flex-wrap h-auto gap-1 p-1">
            {["profit", "breakeven", "oncost", "monthly", "other"].map((val) => (
              <TabsTrigger
                key={val}
                value={val}
                className="font-body data-[state=active]:bg-[#0F172A] data-[state=active]:text-white text-xs"
              >
                {val === "profit" ? "Volume Profit Analysis" : val === "breakeven" ? "Break-Even" : val === "oncost" ? "Per-Subscriber Costs" : val === "monthly" ? "Monthly Fees" : "Other Services"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Profit analysis */}
          <TabsContent value="profit">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="font-heading text-base text-[#0F172A]">
                  Monthly P&amp;L at R100 ARPU — Four Subscriber Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A]">Metric (Monthly)</th>
                        {["1,000 subs", "5,000 subs", "10,000 subs", "25,000 subs"].map(h => (
                          <th key={h} className="text-right py-3 px-4 font-heading font-semibold text-[#0F172A]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {profitRows.map((row) => (
                        <tr
                          key={row.metric}
                          className={`border-t border-slate-100 ${
                            row.type === "total" ? "bg-[#0F172A] text-white font-bold" :
                            row.type === "margin" ? "bg-[#F8FAFC] text-[#0369A1] font-semibold" :
                            row.type === "revenue" ? "bg-sky-50" : ""
                          }`}
                        >
                          <td className={`py-3 px-4 font-medium ${row.type === "total" ? "text-white" : "text-[#0F172A]"}`}>{row.metric}</td>
                          {[row.v1k, row.v5k, row.v10k, row.v25k].map((v, i) => (
                            <td
                              key={i}
                              className={`py-3 px-4 text-right font-mono ${
                                row.type === "total"
                                  ? v.startsWith("(") ? "text-red-400" : "text-green-400"
                                  : row.type === "margin"
                                  ? v === "Loss" ? "text-red-500" : "text-[#0369A1]"
                                  : row.type === "cost" ? "text-red-600" : "text-[#0F172A]"
                              }`}
                            >{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-sky-50 border-t border-slate-200 text-xs font-body text-[#475569]">
                  <strong className="text-[#0F172A]">Key insight:</strong> At 5,000 active subscribers, the MVNO is profitable (R125,000/month net). At 1,000 subscribers,
                  the R75,000 minimum platform fee creates a temporary loss — resolved as the subscriber base grows. Above 5,000 subscribers, net margin stabilises at 25%.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Break-even */}
          <TabsContent value="breakeven">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="font-heading text-base text-[#0F172A]">Break-Even Analysis</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Break-even subscribers", value: "~4,808", color: "text-[#0369A1]" },
                    { label: "Monthly revenue at break-even", value: "R480,800", color: "text-[#0F172A]" },
                    { label: "Setup fee recovery (at 5k subs)", value: "~2 months", color: "text-green-600" },
                  ].map(s => (
                    <div key={s.label} className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-4 text-center">
                      <p className={`font-heading text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                      <p className="font-body text-xs text-[#64748B] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-[#64748B] leading-relaxed">
                  The monthly operational break-even point — where monthly revenues equal all monthly operating costs — is
                  approximately <strong className="text-[#0F172A]">4,808 active subscribers</strong> at R100 ARPU. At this volume,
                  monthly costs (R250,000 wholesale + R75,000 DM fee + R15,000 call centre + R35,000 airtime distribution = R375,000)
                  are covered by revenue of R480,800, yielding a net profit of approximately R105,800. Recovery of the R250,000 setup fee,
                  assuming 5,000 subscribers is achieved by month three, occurs within approximately two months of sustained profitability.
                </p>
                <div className="mt-4 p-4 bg-[#0369A1]/5 rounded-xl border border-[#0369A1]/20">
                  <p className="font-body text-sm font-semibold text-[#0369A1]">
                    🎯 DM recommends: design Telgea&apos;s initial subscriber acquisition strategy to reach 5,000 active subscribers
                    within the first three to six months of Go Live.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Per-subscriber costs */}
          <TabsContent value="oncost">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="font-heading text-base text-[#0F172A]">Once-off Costs Per New Subscriber Acquisition</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-1 max-w-md font-body">
                  {[
                    { label: "SIM Card (personalised)", value: "R12.00", note: "Per SIM card issued" },
                    { label: "Paperless RICA Registration", value: "R21.00", note: "Mandatory for all activations" },
                    { label: "Logistics / SIM Delivery", value: "R40.00", note: "Where courier delivery applies" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-3 px-4 border-b border-slate-100">
                      <div>
                        <p className="font-medium text-[#0F172A]">{row.label}</p>
                        <p className="text-xs text-[#64748B]">{row.note}</p>
                      </div>
                      <span className="font-heading font-bold text-[#0369A1] text-lg">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 px-4 bg-[#0F172A] rounded-lg mt-2">
                    <span className="font-heading font-bold text-white">Total (with courier)</span>
                    <span className="font-heading font-bold text-sky-400 text-xl">R73.00</span>
                  </div>
                </div>
                <p className="font-body text-xs text-[#64748B] mt-4">
                  Where subscribers collect SIM cards from a retail point or Telgea&apos;s own distribution channels,
                  the R40 logistics cost may be reduced or eliminated. The R21 RICA registration is mandatory for all SIM activations under the RICA legislation.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly costs table */}
          <TabsContent value="monthly">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="font-heading text-base text-[#0F172A]">Monthly Cost Responsibility</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="text-left py-3 px-6 font-heading font-semibold text-[#0F172A]">Item</th>
                        <th className="text-center py-3 px-3 font-heading font-semibold text-[#0F172A]">Telgea</th>
                        <th className="text-center py-3 px-3 font-heading font-semibold text-[#0F172A]">DM</th>
                        <th className="text-left py-3 px-6 font-heading font-semibold text-[#0F172A]">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-100">
                        <td className="py-4 px-6 font-medium text-[#0F172A]">Management &amp; Platform Fee</td>
                        <td className="text-center py-4 px-3">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-[#0369A1] rounded-full text-white text-xs">✓</span>
                        </td>
                        <td className="text-center py-4 px-3"></td>
                        <td className="py-4 px-6">
                          <span className="font-heading font-bold text-[#0F172A] text-lg">R15/active subscriber</span>
                          <span className="font-body text-[#64748B] text-sm ml-2">or R75,000/month minimum</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other services */}
          <TabsContent value="other">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="font-heading text-base text-[#0F172A]">Other Monthly Service Options</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A]">Service</th>
                        <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A]">Cost</th>
                        <th className="text-center py-3 px-3 font-heading font-semibold text-[#0F172A]">Responsibility</th>
                        <th className="text-left py-3 px-4 font-heading font-semibold text-[#0F172A] hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {otherServices.map((row, i) => (
                        <tr key={row.service} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"}`}>
                          <td className="py-3 px-4 font-medium text-[#0F172A]">{row.service}</td>
                          <td className="py-3 px-4 font-heading font-semibold text-[#0369A1]">{row.cost}</td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                              row.resp === "Telgea" ? "bg-sky-100 text-sky-700" :
                              row.resp === "DM" ? "bg-slate-100 text-slate-700" :
                              "bg-purple-100 text-purple-700"
                            }`}>{row.resp}</span>
                          </td>
                          <td className="py-3 px-4 text-[#64748B] hidden md:table-cell">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
