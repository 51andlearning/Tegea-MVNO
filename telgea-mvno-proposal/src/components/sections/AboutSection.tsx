import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  "End-to-end MVNO platform hosting in a fully multi-tenant environment",
  "Established MNO wholesale relationships for competitive voice, SMS and data rates",
  "ICASA-compliant regulatory frameworks including full RICA via DSG Paperless RICA",
  "SIM card procurement, personalisation and logistics management",
  "Branded white-label consumer portals and mobile applications (iOS & Android)",
  "Call centre services via CXG, a specialist contact centre operator managed by DM",
  "Real-time prepaid & postpaid billing and South African payment rail integrations",
  "Airtime and data distribution through established retail channels",
];

export default function AboutSection() {
  return (
    <section id="about-dsg" className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Who we are
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            About DSG &amp; Digital Mobile
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            Digital Mobile (Pty) Ltd is a wholly owned entity of Digital Solutions Group (DSG) — South Africa&apos;s
            premier technology and digital solutions conglomerate with over two decades of experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* DSG */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-[#0F172A]" />
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">DSG</span>
                </span>
                <h3 className="font-heading font-bold text-[#0F172A] text-base">
                  Digital Solutions Group
                </h3>
              </div>
              <p className="font-body text-[#64748B] text-sm leading-relaxed">
                Headquartered in Johannesburg, DSG operates across mobile telecommunications, digital identity,
                CX technology, enterprise software and fintech. The Group serves blue-chip clients in banking,
                insurance, retail, government and telecommunications throughout sub-Saharan Africa. Led by{" "}
                <span className="font-semibold text-[#0F172A]">CEO Yaron Assabi</span>, whose three decades of
                technology entrepreneurship underpin DSG&apos;s authority in mobile and digital services.
              </p>
            </CardContent>
          </Card>

          {/* DM */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-[#0369A1]" />
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-[#0369A1] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">DM</span>
                </span>
                <h3 className="font-heading font-bold text-[#0F172A] text-base">
                  Digital Mobile (Pty) Ltd
                </h3>
              </div>
              <p className="font-body text-[#64748B] text-sm leading-relaxed">
                DM is DSG&apos;s dedicated MVNE business, operating the DSG Digital Mobile Platform and
                providing end-to-end enablement services to brands, enterprises and entrepreneurs seeking
                to launch mobile services in South Africa. DM holds the necessary commercial relationships
                with South African MNOs — Vodacom, MTN, Cell C and Telkom Mobile — to provision wholesale
                voice, SMS and data, typically on terms unachievable for a single operator negotiating independently.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Capabilities */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200">
          <h3 className="font-heading font-bold text-[#0F172A] text-base mb-4">
            MVNE Capabilities &amp; Track Record
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5">
                <span className="mt-1 w-4 h-4 rounded-full bg-[#0369A1] flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="font-body text-sm text-[#334155]">{cap}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#64748B] mt-4 italic border-t border-slate-200 pt-4">
            DM&apos;s deployment track record demonstrates the ability to take an MVNO concept from commercial
            agreement to live market service in approximately <span className="font-semibold text-[#0F172A]">60 days</span>,
            subject to client readiness and MNO configuration timelines.
          </p>
        </div>
      </div>
    </section>
  );
}
