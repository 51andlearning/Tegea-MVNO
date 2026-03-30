import { Separator } from "@/components/ui/separator";

export default function SignatureSection() {
  return (
    <section id="acceptance" className="bg-[#0F172A] text-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-sky-400 font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Acceptance
          </p>
          <h2 className="font-heading text-3xl font-bold text-white mb-3">
            Proposal Acceptance
          </h2>
          <p className="font-body text-slate-400 max-w-2xl">
            By signing below, the duly authorised representative of Telgea confirms acceptance of this proposal and
            the terms and conditions set out herein, and authorises Digital Mobile (Pty) Ltd to commence Phase 1
            implementation activities upon confirmed receipt of the Setup Fee of R250,000 (ex VAT).
          </p>
        </div>

        {/* Acknowledgements */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
          <p className="font-heading font-semibold text-sky-400 text-sm mb-3">By signing this proposal, Telgea acknowledges that:</p>
          <ol className="space-y-2 font-body text-sm text-slate-300">
            {[
              "This proposal is valid for 30 days from 27 March 2026, expiring on 26 April 2026.",
              "Acceptance constitutes agreement to the commercial terms and general terms and conditions set out in this document.",
              "The parties will enter into a comprehensive Master Services Agreement within 10 business days of the date of acceptance.",
              "No implementation activities will commence until the Setup Fee has been received in full by DM.",
              "The Setup Fee of R250,000 (ex VAT) is non-refundable once Phase 1 discovery activities have commenced, provided DM delivers the specified Phase 1 services.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sky-400/20 text-sky-400 text-xs font-heading font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* DM */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0369A1]" />
              <p className="font-heading font-semibold text-white text-base">For Digital Mobile (Pty) Ltd</p>
            </div>
            <Separator className="bg-white/10" />
            <div className="space-y-4 font-body text-sm">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Name</p>
                <p className="font-semibold text-white">Yaron Assabi</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Designation</p>
                <p className="font-semibold text-white">Chief Executive Officer</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Date</p>
                <p className="font-semibold text-white">27 March 2026</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Signature</p>
                <div className="h-14 border-b border-dashed border-white/20 mt-2" />
              </div>
            </div>
          </div>

          {/* Telgea */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <p className="font-heading font-semibold text-white text-base">For Telgea</p>
            </div>
            <Separator className="bg-white/10" />
            <div className="space-y-4 font-body text-sm">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Name</p>
                <div className="h-7 border-b border-dashed border-white/20 mt-2" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Designation</p>
                <div className="h-7 border-b border-dashed border-white/20 mt-2" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Date</p>
                <div className="h-7 border-b border-dashed border-white/20 mt-2" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Signature</p>
                <div className="h-14 border-b border-dashed border-white/20 mt-2" />
              </div>
            </div>
          </div>
        </div>

        {/* PDF download CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <p className="font-heading font-semibold text-white text-base mb-1">Download the Full Proposal</p>
            <p className="font-body text-slate-400 text-sm">
              34-page PDF including all figures, tables, RACI matrix and expanded terms.
            </p>
          </div>
          <a
            href="/DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
            download="DSG-Digital-Mobile-MVNO-Proposal-Telgea-2026.pdf"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0369A1] hover:bg-[#025c8a] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        <Separator className="bg-white/10 mb-6" />
        <p className="text-center font-body text-xs text-slate-500">
          &copy; 2026 Digital Mobile (Pty) Ltd &middot; A DSG Company &middot; Confidential &middot; www.mvne.co.za
        </p>
      </div>
    </section>
  );
}
