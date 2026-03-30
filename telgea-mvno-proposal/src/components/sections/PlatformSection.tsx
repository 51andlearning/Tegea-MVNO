import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bssFeatures = [
  { title: "Subscriber Management", desc: "Full KYC lifecycle — SIM registration, RICA verification, service activation, plan changes, deactivation. Complete interaction logs accessible to Telgea management." },
  { title: "Billing & Revenue", desc: "Prepaid & postpaid billing, real-time balance management, CDR mediation, invoicing and statements. Integrations with EFT, card and retail voucher payment rails." },
  { title: "Service Provisioning", desc: "Fully automated MSISDN assignment, APN configuration, bundle management and roaming settings. Service changes processed in near real-time — typically seconds." },
  { title: "Paperless RICA", desc: "DM's proprietary digital RICA module — real-time identity verification, biometric capture and automated regulatory reporting. Fully RICA-compliant and paperless." },
  { title: "Self-Service Portals", desc: "White-label web portal and iOS/Android mobile application deployed under Telgea's branding — balance top-up, bundle purchase, usage monitoring, account management." },
  { title: "Analytics & Reporting", desc: "Real-time management dashboards with subscriber counts, revenue, churn indicators, ARPU trends and MNO wholesale cost reconciliation." },
];

const archPoints = [
  { icon: "🛡️", label: "99.9% uptime SLA", sub: "Redundant multi-AZ infrastructure" },
  { icon: "☁️", label: "Cloud-native microservices", sub: "Auto-scaling compute & storage" },
  { icon: "🔌", label: "API-first integration", sub: "REST APIs for CRM, ERP, loyalty" },
  { icon: "🔒", label: "ISO 27001-aligned security", sub: "AES-256, TLS 1.3, MFA, pen testing" },
  { icon: "🇿🇦", label: "South African data centres", sub: "Data sovereignty & low latency" },
  { icon: "⚡", label: "Loadshedding-resilient", sub: "UPS + diesel generator backup" },
];

export default function PlatformSection() {
  return (
    <section id="platform" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Technology
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            The DSG Digital Mobile Platform
          </h2>
          <p className="font-body text-[#64748B] max-w-2xl">
            A comprehensive, cloud-hosted MVNO operations platform built specifically for the South African market.
            Fully multi-tenant with complete logical separation of data, branding and commercial configuration
            per MVNO operator.
          </p>
        </div>

        {/* Architecture highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {archPoints.map((pt) => (
            <div key={pt.label} className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">{pt.icon}</span>
              <div>
                <p className="font-heading font-semibold text-[#0F172A] text-sm">{pt.label}</p>
                <p className="font-body text-xs text-[#64748B] mt-0.5">{pt.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BSS / OSS grid */}
        <h3 className="font-heading font-bold text-[#0F172A] text-lg mb-4">
          BSS / OSS Capabilities
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {bssFeatures.map((f) => (
            <Card key={f.title} className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-sm text-[#0F172A] flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-[#0369A1] flex-shrink-0" />
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security note */}
        <div className="mt-6 bg-[#0F172A] rounded-xl p-5 flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">🔐</span>
          <div>
            <p className="font-heading font-semibold text-white text-sm mb-1">
              Security &amp; Data Protection
            </p>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              The Platform is designed and operated in accordance with ISO 27001-aligned security best practices,
              including AES-256 encryption at rest, TLS 1.3 in transit, role-based access control,
              multi-factor authentication for all administrative interfaces, and regular independent penetration
              testing. All personal data is handled in strict accordance with{" "}
              <span className="text-sky-400 font-semibold">POPIA (Protection of Personal Information Act)</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
