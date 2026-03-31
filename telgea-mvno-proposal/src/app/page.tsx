import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/* ─── Types ─────────────────────────────────────────────── */

type Section = {
  num: string;
  title: string;
  description: string;
};

type Metric = {
  value: string;
  label: string;
  sub?: string;
};

type Feature = {
  text: string;
};

/* ─── Data ───────────────────────────────────────────────── */

const sections: Section[] = [
  {
    num: "01",
    title: "Executive Summary",
    description:
      "Partnership opportunity, value proposition, commercial highlights, and why DM — why now.",
  },
  {
    num: "02",
    title: "About DSG & Digital Mobile",
    description:
      "Group overview, MVNE capabilities, track record, and key personnel.",
  },
  {
    num: "03",
    title: "The Digital Mobile Platform",
    description:
      "Core capabilities, BSS/OSS, API and integration framework, security, and regulatory compliance.",
  },
  {
    num: "04",
    title: "Market Opportunity",
    description:
      "South African mobile market, the MVNO ecosystem, target segments, and Telgea's entry vehicle.",
  },
  {
    num: "05",
    title: "Scope of Work",
    description:
      "Two-phase implementation programme — scoping and business simulation — with week-by-week timeline.",
  },
  {
    num: "06",
    title: "Commercial Terms",
    description:
      "Once-off setup fee, monthly platform fee, revenue model, break-even analysis, and per-subscriber costs.",
  },
  {
    num: "07",
    title: "Service Level Agreements",
    description:
      "Platform uptime, billing accuracy, incident response SLAs, and escalation matrix.",
  },
  {
    num: "08",
    title: "Roles & Responsibilities",
    description:
      "RACI matrix covering all implementation and ongoing operations activities.",
  },
  {
    num: "09",
    title: "Risk Register",
    description:
      "Technical, commercial, regulatory, and operational risks with likelihood ratings and mitigation strategies.",
  },
  {
    num: "10",
    title: "Terms & Conditions",
    description:
      "Commercial and legal framework — payment terms, IP, confidentiality, liability, and governing law.",
  },
  {
    num: "11",
    title: "Proposal Acceptance",
    description:
      "Validity notice, acceptance terms, and authorised signature blocks for both parties.",
  },
];

const metrics: Metric[] = [
  {
    value: "R250,000",
    label: "Once-off Setup Fee",
    sub: "Ex VAT · Covers full implementation",
  },
  {
    value: "8 Weeks",
    label: "Kick-off to Go Live",
    sub: "Phase 1 (4 wks) + Phase 2 (4 wks)",
  },
  {
    value: "R32.50",
    label: "Net Profit per Subscriber",
    sub: "At R100 ARPU · 32.5% net margin",
  },
  {
    value: "~4,808",
    label: "Break-even Subscribers",
    sub: "Achievable in first 6 months",
  },
];

const whyDM: Feature[] = [
  { text: "Established MNO wholesale agreements — no direct negotiations required" },
  { text: "Fully managed MVNE platform hosted and operated by DM" },
  { text: "Comprehensive RICA compliance infrastructure built-in" },
  { text: "End-to-end SIM logistics, call centre, and airtime distribution" },
  { text: "8-week Go Live commitment with formal milestone tracking" },
  { text: "Part of the DSG Group — two decades of SA technology delivery" },
];

const metaRows = [
  ["Prepared by", "Digital Mobile (Pty) Ltd · A DSG Company"],
  ["Prepared for", "Telgea"],
  ["Date", "27 March 2026"],
  ["Valid Until", "26 April 2026"],
  ["Classification", "Confidential — For the exclusive use of Telgea"],
];

/* ─── Page ───────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Sticky Navigation ─────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "var(--dsg-navy)",
          borderColor: "rgba(174,205,223,0.15)",
          marginTop: "2cm",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-end gap-4">
            <a href="https://www.mvne.co.za" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity self-end leading-none">
              <Image
                src="https://www.mvne.co.za/mvne-logo.png"
                alt="MVNE – mobile virtual network enabler"
                height={36}
                width={100}
                className="block"
                style={{ height: "36px", width: "auto" }}
                unoptimized
              />
            </a>
            <Separator
              orientation="vertical"
              className="h-6"
              style={{ backgroundColor: "rgba(174,205,223,0.3)", alignSelf: "center" }}
            />
            <a href="https://www.dsg.co.za" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity self-end leading-none">
              <Image
                src="https://www.dsg.co.za/media/qj2fraey/dsg-logo.png"
                alt="DSG – Digital Solutions Group"
                height={36}
                width={100}
                className="block"
                style={{ height: "36px", width: "auto" }}
                unoptimized
              />
            </a>
            <Separator
              orientation="vertical"
              className="h-4"
              style={{ backgroundColor: "rgba(174,205,223,0.3)" }}
            />
            <span className="text-xs" style={{ color: "var(--dsg-blue-pale)" }}>
              MVNO Proposal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="hidden sm:block text-xs font-bold tracking-[0.3em]"
              style={{ color: "var(--dsg-blue-mid)" }}
            >
              CONFIDENTIAL
            </span>
            <Badge
              className="text-xs font-semibold border-0"
              style={{
                backgroundColor: "var(--dsg-red)",
                color: "#FFFFFF",
              }}
            >
              Valid until 26 Apr 2026
            </Badge>
          </div>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--dsg-navy)" }}
      >
        {/* Subtle diagonal gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,70,96,0.5) 0%, transparent 60%)",
          }}
        />

        {/* Faint grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(174,205,223,1) 1px, transparent 1px), linear-gradient(90deg, rgba(174,205,223,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Digital Mobile logo – top left */}
        <div className="absolute top-8 left-8 z-20">
          <Image
            src="https://www.dsg.co.za/assets/logo/colour/Digital%20Mobile.png"
            alt="Digital Mobile"
            height={48}
            width={160}
            style={{ height: "48px", width: "auto" }}
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center">

          {/* CONFIDENTIAL stamp */}
          <p
            className="text-xs font-bold tracking-[0.55em] uppercase mb-12"
            style={{ color: "var(--dsg-blue-mid)" }}
          >
            C O N F I D E N T I A L
          </p>

          {/* Eyebrow */}
          <p
            className="text-sm tracking-widest uppercase mb-6"
            style={{ color: "var(--dsg-blue-pale)" }}
          >
            Proposal for the Licensing of the
          </p>

          {/* Main title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Digital Mobile Platform
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl font-light mb-16"
            style={{ color: "var(--dsg-blue-pale)" }}
          >
            A Light MVNO Arrangement for Telgea
          </p>

          {/* Meta table */}
          <div
            className="w-full max-w-md mb-12 rounded-lg overflow-hidden text-left"
            style={{ border: "1px solid rgba(126,168,200,0.25)" }}
          >
            {metaRows.map(([label, value], i) => (
              <div
                key={label}
                className="flex"
                style={{
                  borderBottom:
                    i < metaRows.length - 1
                      ? "1px solid rgba(126,168,200,0.15)"
                      : "none",
                }}
              >
                <span
                  className="w-36 shrink-0 px-4 py-2.5 text-xs font-semibold"
                  style={{ color: "var(--dsg-blue-mid)" }}
                >
                  {label}
                </span>
                <span
                  className="px-4 py-2.5 text-xs border-l"
                  style={{
                    color: "#FFFFFF",
                    borderColor: "rgba(126,168,200,0.15)",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              size="lg"
              className="font-semibold text-white border-0 shadow-lg"
              style={{ backgroundColor: "var(--dsg-blue)" }}
            >
              View Proposal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold"
              style={{
                backgroundColor: "transparent",
                borderColor: "rgba(126,168,200,0.4)",
                color: "var(--dsg-blue-pale)",
              }}
            >
              Contact Digital Mobile
            </Button>
          </div>

          {/* Scroll cue */}
          <div className="mt-20 flex flex-col items-center gap-2">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(174,205,223,0.4)" }}
            >
              Scroll to explore
            </span>
            <div
              className="w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(174,205,223,0.4), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Key Metrics ───────────────────────────────── */}
      <section
        className="border-y"
        style={{
          backgroundColor: "var(--dsg-navy-deep)",
          borderColor: "rgba(126,168,200,0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: "var(--dsg-blue-light)" }}
              >
                {m.value}
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#FFFFFF" }}
              >
                {m.label}
              </p>
              {m.sub && (
                <p className="text-xs" style={{ color: "var(--dsg-blue-mid)" }}>
                  {m.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Table of Contents ─────────────────────────── */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div
              className="w-1 h-8 rounded-full"
              style={{ backgroundColor: "var(--dsg-blue)" }}
            />
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--dsg-blue)" }}
              >
                Contents
              </p>
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--dsg-navy)" }}
              >
                Proposal Sections
              </h2>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s) => (
              <SectionCard key={s.num} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Digital Mobile ────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--dsg-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: heading */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--dsg-blue)" }}
            >
              Why Digital Mobile
            </p>
            <h2
              className="text-3xl font-bold leading-snug mb-6"
              style={{ color: "#FFFFFF" }}
            >
              The MVNE Partner Built for the South African Market
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--dsg-blue-pale)" }}>
              DM provides Telgea with an immediately deployable, fully managed
              MVNE platform — eliminating the need for direct MNO negotiations,
              regulatory infrastructure build-out, or capital investment in
              platform development.
            </p>
            <Button
              className="font-semibold text-white border-0"
              style={{ backgroundColor: "var(--dsg-blue)" }}
            >
              Read the Executive Summary
            </Button>
          </div>

          {/* Right: feature list */}
          <ul className="space-y-4">
            {whyDM.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(0,111,192,0.25)",
                    color: "var(--dsg-blue-light)",
                    border: "1px solid rgba(0,111,192,0.4)",
                  }}
                >
                  ✓
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--dsg-blue-pale)" }}
                >
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Implementation Timeline Teaser ────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div
              className="w-1 h-8 rounded-full"
              style={{ backgroundColor: "var(--dsg-blue)" }}
            />
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--dsg-blue)" }}
              >
                Programme
              </p>
              <h2 className="text-2xl font-bold" style={{ color: "var(--dsg-navy)" }}>
                8 Weeks from Kick-off to Go Live
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhaseCard
              phase="Phase 1"
              weeks="Weeks 1–4"
              title="Implementation Scoping"
              color="var(--dsg-navy)"
              items={[
                "Business Requirements Specification (BRS)",
                "Technical Specifications",
                "Customer Journey Mapping",
                "DARE Model (Distribution, Acquisition, Retention, Engagement)",
              ]}
            />
            <PhaseCard
              phase="Phase 2"
              weeks="Weeks 5–8"
              title="Implementation & Business Simulation"
              color="var(--dsg-navy-deep)"
              items={[
                "Full platform configuration for Telgea's MVNO instance",
                "Branded subscriber portal (web + mobile)",
                "MNO live network configuration",
                "Go Live Readiness Review + commercial launch",
              ]}
            />
          </div>

          {/* Post-launch note */}
          <div
            className="mt-6 rounded-lg px-6 py-4 flex items-start gap-3"
            style={{
              backgroundColor: "var(--secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="text-xs font-bold mt-0.5"
              style={{ color: "var(--dsg-blue)" }}
            >
              +2 wks
            </span>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--dsg-navy)" }}>
                Post-launch Hypercare Period
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                Intensive monitoring, rapid incident response, and first-wave
                subscriber support — included in the setup fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commercial Highlight ──────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--dsg-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--dsg-blue)" }}
          >
            Commercial Model
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Transparent Pricing. Aligned Incentives.
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm leading-relaxed mb-14"
            style={{ color: "var(--dsg-blue-pale)" }}
          >
            DM's fee structure is designed to scale with Telgea's growth.
            The platform fee is{" "}
            <span style={{ color: "var(--dsg-blue-light)", fontWeight: 600 }}>
              R15 per active subscriber per month
            </span>{" "}
            (minimum R75,000/month), ensuring both parties are commercially
            motivated to grow the subscriber base.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                label: "1,000 subs",
                profit: "–R35,000",
                margin: "Pre break-even",
                note: "Minimum fee applies",
                positive: false,
              },
              {
                label: "5,000 subs",
                profit: "R125,000",
                margin: "25% net margin",
                note: "Above break-even",
                positive: true,
              },
              {
                label: "25,000 subs",
                profit: "R625,000",
                margin: "25% net margin",
                note: "Fully scaled",
                positive: true,
              },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-lg p-5 text-center"
                style={{
                  backgroundColor: row.positive
                    ? "rgba(0,111,192,0.15)"
                    : "rgba(255,255,255,0.05)",
                  border: row.positive
                    ? "1px solid rgba(0,111,192,0.4)"
                    : "1px solid rgba(126,168,200,0.15)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-wide uppercase mb-3"
                  style={{
                    color: row.positive
                      ? "var(--dsg-blue-light)"
                      : "var(--dsg-blue-mid)",
                  }}
                >
                  {row.label}
                </p>
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    color: row.positive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {row.profit}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--dsg-blue-mid)" }}
                >
                  {row.margin}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(174,205,223,0.5)" }}
                >
                  {row.note}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-xs"
            style={{ color: "rgba(174,205,223,0.4)" }}
          >
            Monthly net profit figures are based on R100 ARPU. Full model in
            Section 06 — Commercial Terms.
          </p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer
        className="border-t"
        style={{
          backgroundColor: "var(--dsg-navy)",
          borderColor: "rgba(126,168,200,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
              Digital Mobile (Pty) Ltd
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--dsg-blue-mid)" }}>
              A DSG Company ·{" "}
              <a
                href="https://www.mvne.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.mvne.co.za
              </a>{" "}
              ·{" "}
              <a
                href="https://www.dsg.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.dsg.co.za
              </a>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: "var(--dsg-blue-mid)" }}>
              Confidential · For the exclusive use of Telgea
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(174,205,223,0.4)" }}>
              © 2026 Digital Mobile (Pty) Ltd · Valid until 26 April 2026
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────── */

function SectionCard({ section }: { section: Section }) {
  return (
    <div
      className="group rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Card header strip */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ backgroundColor: "var(--dsg-navy)" }}
      >
        <span
          className="text-xs font-mono font-bold"
          style={{ color: "var(--dsg-blue-mid)" }}
        >
          {section.num}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "var(--dsg-blue-light)" }}
        >
          <path
            d="M1 7h12M7 1l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Card body */}
      <div className="px-5 py-4 bg-card">
        <h3
          className="text-sm font-semibold leading-snug mb-2 group-hover:text-dsg-blue transition-colors"
          style={{ color: "var(--dsg-navy)" }}
        >
          {section.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {section.description}
        </p>
      </div>
    </div>
  );
}

function PhaseCard({
  phase,
  weeks,
  title,
  color,
  items,
}: {
  phase: string;
  weeks: string;
  title: string;
  color: string;
  items: string[];
}) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: "1px solid rgba(126,168,200,0.2)" }}
    >
      {/* Phase header */}
      <div className="px-6 py-5" style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--dsg-blue)" }}
          >
            {phase}
          </span>
          <span
            className="text-xs font-mono"
            style={{ color: "var(--dsg-blue-mid)" }}
          >
            {weeks}
          </span>
        </div>
        <p className="text-base font-bold" style={{ color: "#FFFFFF" }}>
          {title}
        </p>
      </div>

      {/* Deliverables */}
      <div className="px-6 py-5 bg-card">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Key Deliverables
        </p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--dsg-blue)" }}
              />
              <span
                className="text-xs leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
