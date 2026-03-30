import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const phase1 = [
  {
    id: "brs", title: "Business Requirements Specification (BRS)",
    content: "The BRS is the foundational document capturing all of Telgea's business requirements — subscriber acquisition approach, service and pricing strategy, branding requirements, reporting needs, integration requirements and operational parameters. DM conducts two to three discovery workshops and drafts the full BRS document. Both parties formally sign off before Phase 2 commences.",
  },
  {
    id: "tech", title: "Technical Specifications",
    content: "DM's solutions architecture team develops the Technical Specifications covering all platform configuration parameters, billing rate plan structures, bundle definitions, RICA workflow configuration, API integration specifications, staging and production environment setup, MNO network configuration requirements and a full test plan. MNO input is required for network sections. Both parties sign off.",
  },
  {
    id: "journey", title: "Customer Journey Mapping",
    content: "A dedicated workshop maps the end-to-end Telgea subscriber experience across all key scenarios: SIM acquisition and RICA registration, first activation and recharge, bundle purchase, customer service interaction, account management (plan changes, number porting, SIM swap), and churn prevention. Each journey map identifies touchpoints, responsible parties (Telgea vs DM vs MNO vs CXG), and system interactions.",
  },
  {
    id: "dare", title: "DARE Model Development",
    content: "The DARE Model (Decision, Action, Responsibility, Execution) is DM's proprietary operational governance framework for the MVNO partnership. It defines — at a granular level — who decides what, who acts, who is responsible for outcomes, and how execution is tracked and measured across every operational process. The DARE Model is the foundation of DM's ongoing operational accountability and Telgea's management reporting.",
  },
];

const phase2 = [
  {
    id: "build", title: "DM Builds MVNO Services on Platform",
    content: "DM's engineering team configures Telgea's dedicated platform instance in a staging environment — subscriber management parameters, billing rate plans, bundle definitions, RICA workflow, branded web and mobile portal, automated notifications, reporting dashboards and all API integrations. DM QA conducts functional, regression and performance testing. Telgea then conducts User Acceptance Testing (UAT) against the Customer Journey Maps before sign-off.",
  },
  {
    id: "mno", title: "MNO Network Configuration",
    content: "With UAT signed off, the MNO partner configures Telgea's MVNO at network level — provisioning in the HLR/HSS, activating the MSISDN range, configuring voice/SMS/data service profiles, establishing the live interconnect and validating end-to-end service flows. DM manages the MNO relationship throughout, tracking delivery against the agreed activation schedule with active escalation.",
  },
  {
    id: "sims", title: "First SIM Batch Order",
    content: "SIM cards are procured by DM through its established SIM supply chain, personalised with Telgea's network profile, allocated MSISDNs and security keys at the manufacturer's secure facility, quality-inspected and packaged to Telgea's branding specifications. Batch size is agreed jointly based on projected initial subscriber acquisition volume. Each SIM is fully trackable from manufacture through activation.",
  },
  {
    id: "golive", title: "Go Live & Hypercare",
    content: "A formal Go Live Readiness Review covers completeness of all deliverables, platform and network readiness, call centre training, SIM stock availability, Telgea's subscriber acquisition and marketing readiness, and financial readiness. Go Live is jointly authorised by DM's programme manager and Telgea's project sponsor. A structured two-week hypercare period follows with dedicated DM technical and operations resources, elevated monitoring and rapid incident response.",
  },
];

export default function ScopeSection() {
  return (
    <section id="scope" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            What we deliver
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Scope of Work
          </h2>
          <p className="font-body text-[#64748B] max-w-lg">
            Two phases of approximately four weeks each, commencing from signature date and confirmed
            receipt of the setup fee. Total programme duration: approximately eight weeks to Go Live.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Phase 1 */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-[#0F172A] text-white pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-[#0369A1] text-white text-xs font-heading font-bold flex items-center justify-center">1</span>
                <span className="text-sky-400 text-xs font-heading font-semibold uppercase tracking-widest">Phase One · Weeks 1–4</span>
              </div>
              <CardTitle className="text-base text-white font-heading">Implementation Scoping</CardTitle>
              <p className="font-body text-slate-400 text-xs mt-1">All four deliverables require formal written sign-off by both parties before Phase 2 commences.</p>
            </CardHeader>
            <CardContent className="pt-0 bg-white">
              <Accordion type="single" collapsible className="w-full">
                {phase1.map((item, i) => (
                  <AccordionItem key={item.id} value={item.id} className={i === phase1.length - 1 ? "border-0" : ""}>
                    <AccordionTrigger className="text-sm font-body font-semibold text-[#0F172A] hover:text-[#0369A1]">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#64748B] text-sm leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-[#0369A1] text-white pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-white text-[#0369A1] text-xs font-heading font-bold flex items-center justify-center">2</span>
                <span className="text-sky-200 text-xs font-heading font-semibold uppercase tracking-widest">Phase Two · Weeks 5–8</span>
              </div>
              <CardTitle className="text-base text-white font-heading">Implementation &amp; Business Simulation</CardTitle>
              <p className="font-body text-sky-200 text-xs mt-1">DM takes primary technical responsibility. Telgea&apos;s active participation required for UAT and Go Live authorisation.</p>
            </CardHeader>
            <CardContent className="pt-0 bg-white">
              <Accordion type="single" collapsible className="w-full">
                {phase2.map((item, i) => (
                  <AccordionItem key={item.id} value={item.id} className={i === phase2.length - 1 ? "border-0" : ""}>
                    <AccordionTrigger className="text-sm font-body font-semibold text-[#0F172A] hover:text-[#0369A1]">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#64748B] text-sm leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
