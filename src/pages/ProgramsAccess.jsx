import { Link } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'
import { 
  Users, 
  Settings, 
  Calendar, 
  Clock, 
  Layers, 
  ArrowRight,
  ChevronRight, 
  GraduationCap, 
  Rocket, 
  Search, 
  Briefcase, 
  Lightbulb, 
  Check,
  Hammer
} from 'lucide-react'

const WHO_CAN_ACCESS = [
  { group: "Students", desc: "Build capstone projects, academic thesis models, and validate student design concepts.", icon: GraduationCap },
  { group: "Startups", desc: "Fabricate physical MVPs, assemble mechanical casings, and test functional hardware.", icon: Rocket },
  { group: "Researchers", desc: "Design custom structural setups, precision test rigs, and translate research details to working systems.", icon: Search },
  { group: "Faculty", desc: "Translate academic findings and government research grants into physical working models.", icon: Users },
  { group: "Industry", desc: "Develop and test custom engineering brackets, fixtures, or sheet metal assemblies.", icon: Briefcase },
  { group: "Innovators", desc: "Bring independent physical inventions to life with professional engineering support.", icon: Lightbulb }
];

const WHAT_WE_OFFER = [
  "Precision 3D Printing (FDM & SLA)",
  "Desktop CNC Routing",
  "Vacuum Urethane Casting",
  "Manual Lathe & Turning Benches",
  "Sheet Metal Bending & Folding",
  "CAD Assembly Modeling (SolidWorks)",
  "Load & Finite Element Simulation",
  "Machinery Orientation & Safety Briefings"
];

const PROGRAMS = [
  {
    title: "DST NIDHI-PRAYAS Program",
    desc: "A flagship pre-incubation grant-in-aid program by the Department of Science and Technology (DST) supporting young innovators to translate physical ideas into mechanical prototypes. Offers up to ₹10 Lakhs in funding alongside dedicated workspace access.",
    duration: "12 - 18 Months",
    audience: "Individual Innovators & Early Startups",
    date: "Applications processed periodically",
    color: "border-primary"
  },
  {
    title: "K-Tech CIF (Common Infrastructure Facility)",
    desc: "An initiative supported by the Government of Karnataka, in partnership with KDEM and the IT/BT Department, to provide deep-tech and hardware startups with 'Plug & Start' workspace infrastructure, advanced machining access, and technical coaching to scale products.",
    duration: "Milestone-based",
    audience: "Registered Startups & Deep-Tech Founders",
    date: "Rolling admissions",
    color: "border-accent"
  },
  {
    title: "Mechanical Prototyping Sprint",
    desc: "An intensive cohort sprint helping mechanical builders translate CAD files into physical models. Focuses on laser cut testing, 3D printing optimization, and manual lathe turning under direct lab technician supervision.",
    duration: "2 Weeks",
    audience: "Student Projects & Academic Capstones",
    date: "Monthly scheduling",
    color: "border-primary"
  },
  {
    title: "Tooling & Safety Workshops",
    desc: "Weekend training cohorts covering CAD configurations, CAM path setups, CNC operations, sheet metal bending, and vacuum casting degasser safety rules. Mandatory for independent machine bookings.",
    duration: "Weekend Sessions",
    audience: "All Makerspace Users",
    date: "Monthly sessions",
    color: "border-accent"
  }
];

const STEPS = [
  { num: "01", name: "Tell Us", desc: "Submit an online enquiry describing your mechanical prototype scope." },
  { num: "02", name: "Discuss", desc: "Have a 15-min call to evaluate design files and tool feasibility." },
  { num: "03", name: "Plan", desc: "Review the required raw materials and schedule machine booking slots." },
  { num: "04", name: "Build", desc: "Receive safety briefings, machine access tokens, and start fabricating." },
  { num: "05", name: "Test & Fit", desc: "Conduct assembly tests, check dimension tolerances, and refine designs." },
  { num: "06", name: "Scale Up", desc: "Graduate to incubation, funding pipelines, and production partners." }
];

const ACCESS_OPTIONS = [
  {
    name: "Open Lab Access",
    target: "Students & Hobbyists",
    duration: "Weekly Slots",
    cost: "Free for SJCE campus",
    features: [
      "Assigned layout bench during open hours",
      "SLA/FDM 3D printer bookings (scheduled)",
      "Standard hand tools access",
      "Technician safety guidance"
    ]
  },
  {
    name: "Project-Based Access",
    target: "Capstone Teams / Researchers",
    duration: "Semester Slots",
    cost: "Project-based sponsorship",
    features: [
      "Semi-dedicated cabinet space for tooling",
      "Full machinery access (scheduled)",
      "Dedicated design review slot",
      "Mentorship from hardware leads"
    ]
  },
  {
    name: "Startup Access",
    target: "Incubated Startups",
    duration: "24/7 Workspace Access",
    cost: "Part of incubation package",
    features: [
      "Dedicated prototyping workbench",
      "Priority machine booking",
      "Direct engineer design audits",
      "Integration with funding grants"
    ]
  },
  {
    name: "Industry Access",
    target: "Corporate Innovation",
    duration: "Contractual",
    cost: "Custom commercial agreements",
    features: [
      "Strict IP / NDA isolation space",
      "Priority layout & fab assistance",
      "Batch machining runs support",
      "Dedicated project coordination"
    ]
  }
];

export default function ProgramsAccess() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 text-on-ink">
        <div aria-hidden="true" className="chevron-shape absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2 bg-white/5 pointer-events-none"></div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-left">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Programs & Access
            </span>
            <h1 className="text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-[4rem] text-white">
              Don't just sketch hardware. <span className="font-bold text-accent">Fabricate it.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-on-ink-muted">
              Whether you are a student developing your first physical assembly or a startup scaling a physical casing product line, the lab offers pathways to build and validate.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER & WHO IT'S FOR */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
            
            {/* Left Box: Offerings */}
            <div className="bg-bone border border-border rounded-xl p-8 sticky top-24 text-left">
              <p className="eyebrow text-primary"><ScrambledText text="Available Infrastructure" /></p>
              <h3 className="text-2xl font-bold mt-4 mb-6">What We Offer</h3>
              <ul className="space-y-3.5">
                {WHAT_WE_OFFER.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <Link
                  to="/about#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-violet-deep hover:underline cursor-pointer"
                >
                  Schedule a physical lab tour
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right List: Who is it for */}
            <div>
              <div className="mb-12 text-left">
                <p className="eyebrow text-accent"><ScrambledText text="Who Can Build" /></p>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Who Can Access the Lab?
                </h2>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Our lab is designed to accommodate different development cycles, ranging from rapid student prototype sprints to corporate commercial casing validations.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {WHO_CAN_ACCESS.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="rounded-xl border border-border p-6 bg-card flex flex-col justify-between hover:bg-bone/25 transition-colors text-left">
                      <div>
                        <div className="text-primary mb-3">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-base text-foreground">{item.group}</h4>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THE ACCESS WORKFLOW */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-primary"><ScrambledText text="Operational Pipeline" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              We verify and grant access in 6 steps to maximize efficiency and equipment safety.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-6 relative overflow-hidden group text-left">
                <div className="absolute top-4 right-6 font-mono text-[4rem] font-bold text-bone select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[100px]">
                  <div>
                    <h3 className="font-bold text-base text-foreground">{step.name}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-[85%]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAMS LIST */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-accent"><ScrambledText text="Cohort Support" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Prototyping Programs
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Explore DST and Karnataka Government sponsored programs offering funding and workspace access.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROGRAMS.map((prog, idx) => (
              <div key={idx} className={`rounded-xl border-t-4 ${prog.color} border border-border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-shadow text-left`}>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{prog.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-3 mb-6">
                    {prog.desc}
                  </p>
                </div>
                <div className="border-t border-border/80 pt-4 flex flex-col gap-2 font-mono text-[10px] text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold text-foreground">{prog.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Cohort:</span>
                    <span className="font-semibold text-foreground">{prog.audience}</span>
                  </div>
                  <div className="flex justify-between text-accent font-semibold">
                    <span>Status:</span>
                    <span>{prog.date}</span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-border/60">
                    <Link
                      to="/about#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-violet-deep cursor-pointer"
                    >
                      Enquire about program details
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESS MATRIX / COMPARISON TABLE */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-primary"><ScrambledText text="Tier Comparison" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Access Options & Packages
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Choose the access model that aligns with your fabrication requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACCESS_OPTIONS.map((opt, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-background p-6 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div>
                  <h3 className="text-lg font-bold text-foreground border-b border-border pb-3.5 mb-4">{opt.name}</h3>
                  <div className="space-y-1 font-mono text-[10px] text-muted-foreground mb-6">
                    <div className="flex justify-between">
                      <span>Target:</span>
                      <span className="font-semibold text-foreground">{opt.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Slot duration:</span>
                      <span className="font-semibold text-foreground">{opt.duration}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-accent">
                      <span>Fee structure:</span>
                      <span>{opt.cost}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {opt.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-1 shrink-0 font-bold">✓</span>
                        <span className="text-left">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60">
                  <Link
                    to="/about#contact"
                    className="block text-center rounded-lg bg-accent py-2 text-xs font-semibold text-white hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    Request Workspace Slot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
