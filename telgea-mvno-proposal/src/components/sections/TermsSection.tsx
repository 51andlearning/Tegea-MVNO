import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const terms = [
  {
    id: "validity",
    title: "11.1 Proposal Validity",
    content: "This proposal is valid for 30 days from the date of issue (27 March 2026) and expires at midnight on 26 April 2026. DM reserves the right to withdraw or revise this proposal prior to formal acceptance. Acceptance is constituted by the signature of an authorised Telgea representative on the Proposal Acceptance page together with confirmed receipt of the Setup Fee payment.",
  },
  {
    id: "msa",
    title: "11.2 Comprehensive Master Services Agreement",
    content: "This proposal constitutes the binding commercial agreement between the parties to commence Phase 1. The parties will enter into a comprehensive Master Services Agreement (MSA) within 10 business days of acceptance, elaborating upon and incorporating these Terms in comprehensive form. In the event of conflict, the MSA shall prevail, save that commercial terms in Section 7 shall not be materially varied to Telgea's detriment without Telgea's prior written consent.",
  },
  {
    id: "payment",
    title: "11.3 Payment Terms & Late Payment",
    content: "Setup Fee: payable in full by EFT within 3 business days of signing. Monthly fees: invoiced monthly in arrears by the 5th business day of each month, due within 30 days. Late payments: 2% penalty per month, compounded monthly, from due date until full payment. Disputed invoices must be raised in writing within 10 business days of receipt; undisputed portions remain due and payable.",
  },
  {
    id: "pricing",
    title: "11.4 Pricing Adjustments & Exchange Rate",
    content: "DM shall provide Telgea with a minimum of 30 calendar days' written notice of any proposed price adjustment, with full justification. No single price adjustment shall exceed 10% of the affected fee component in any 12-month period without Telgea's written consent. Pricing is subject to USD/ZAR exchange rate fluctuations. Telgea may, within 15 calendar days of receiving notice, accept the adjustment or invoke the dispute resolution process.",
  },
  {
    id: "ip",
    title: "11.7 Intellectual Property Rights",
    content: "DM retains all right, title and interest in and to the DSG Digital Mobile Platform, including all software, algorithms, methodologies, configuration frameworks, APIs and associated documentation. The DARE Model and DM's proprietary operational frameworks remain DM's exclusive intellectual property. Telgea retains ownership of Telgea's brand assets, subscriber data and Telgea's own content. Any custom developments specifically for Telgea will be subject to IP ownership provisions in the MSA.",
  },
  {
    id: "confidentiality",
    title: "11.8 Confidentiality & Non-Disclosure",
    content: "Both parties undertake to maintain strict confidentiality of the other party's confidential information and to use it solely for performing obligations under this proposal and the MSA. Confidential information includes commercial terms, subscriber data, platform architecture, technical specifications, business strategies, financial information and pricing. Information may only be disclosed to employees, contractors or professional advisors who have a legitimate need to know and are bound by equivalent confidentiality obligations.",
  },
  {
    id: "termination",
    title: "11.9 Termination",
    content: "Either party may terminate the MSA on 90 calendar days' written notice to the other. Either party may terminate immediately for material breach (not remedied within 20 business days of written notice) or insolvency. The Setup Fee is non-refundable once Phase 1 discovery activities have commenced, provided DM has delivered the specified Phase 1 services. Upon termination, DM will provide reasonable transition assistance and data export to Telgea at no charge for 60 days.",
  },
  {
    id: "popia",
    title: "11.12 Data Protection — POPIA Compliance",
    content: "Both parties acknowledge that personal information processed in connection with the MVNO services constitutes personal information as defined in the Protection of Personal Information Act, 4 of 2013 (POPIA). DM operates as an operator processing personal information on behalf of Telgea (the responsible party) in respect of Telgea's subscriber data. DM has implemented appropriate technical and organisational measures to protect personal information, including AES-256 encryption, role-based access controls and formal incident response procedures.",
  },
  {
    id: "forcemajeure",
    title: "11.11 Force Majeure",
    content: "Neither party shall be liable for failure or delay in performance caused by events beyond reasonable control — including acts of God, natural disasters, pandemic, war, terrorism, civil unrest, strikes, governmental actions, MNO network-wide outages, or failure of third-party infrastructure suppliers. Load-shedding by Eskom is specifically acknowledged as a Force Majeure Event; DM's data centre infrastructure includes UPS and diesel generator backup. If a Force Majeure Event continues for more than 30 consecutive calendar days, either party may terminate affected obligations on 10 calendar days' written notice.",
  },
  {
    id: "dispute",
    title: "11.10 Dispute Resolution",
    content: "Any dispute arising out of or in connection with this proposal or the MSA that cannot be resolved amicably within 10 business days of written notification shall be referred to mediation under the AFSA Commercial Mediation Rules, failing which to arbitration under the AFSA Commercial Arbitration Rules. The seat of arbitration shall be Johannesburg, South Africa. The governing law is the law of the Republic of South Africa.",
  },
];

export default function TermsSection() {
  return (
    <section id="terms" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#0369A1] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Legal &amp; commercial
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-3">
            Terms &amp; Conditions
          </h2>
          <p className="font-body text-[#64748B] max-w-lg">
            These Terms constitute the commercial and legal framework agreed between the parties at proposal acceptance
            and will be elaborated upon in the Master Services Agreement to be entered into within 10 business days of acceptance.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <Accordion type="multiple" className="w-full">
            {terms.map((term, i) => (
              <AccordionItem
                key={term.id}
                value={term.id}
                className={i < terms.length - 1 ? "border-b border-slate-100" : "border-0"}
              >
                <AccordionTrigger className="px-6 font-heading font-semibold text-[#0F172A] hover:text-[#0369A1] text-sm [&[data-state=open]]:text-[#0369A1]">
                  {term.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 font-body text-[#64748B] leading-relaxed text-sm">
                  {term.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
