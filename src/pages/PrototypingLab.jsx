import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Briefcase, 
  Lightbulb, 
  ExternalLink, 
  Check, 
  CheckCircle, 
  FlaskConical, 
  Compass, 
  Factory, 
  Scale, 
  Microscope, 
  Send,
  Layers,
  Settings
} from 'lucide-react'

// Focus Areas
const FOCUS_AREAS = [
  {
    num: "01",
    title: "MEDICAL DEVICES",
    desc: "Prototype development and engineering support for emerging healthcare and medical technologies, compliant enclosures, and diagnostic setups.",
    icon: Activity,
    badge: "Biomedical & Clinical"
  },
  {
    num: "02",
    title: "ELECTRONICS & ENCLOSURES",
    desc: "Mechanical design, enclosure development, thermal / structural considerations, prototyping, and manufacturing support for electronic products.",
    icon: Cpu,
    badge: "Industrial & IoT"
  },
  {
    num: "03",
    title: "DEEP-TECH R&D",
    desc: "Engineering and prototyping support for research-intensive, technology-driven, and hardware-centric innovations across physical disciplines.",
    icon: FlaskConical,
    badge: "High Precision"
  },
  {
    num: "04",
    title: "CHEMICAL & PROCESS EQUIPMENT",
    desc: "Prototype development for extraction, processing, laboratory rigs, specialized fluidics, and chemical-engineering applications.",
    icon: Factory,
    badge: "Fluid & Thermal"
  }
];

// Audiences
const WHO_WE_BUILD_WITH = [
  {
    role: "INNOVATORS",
    desc: "Turn promising ideas into technically validated proof-of-concepts and prototypes without wasting capital.",
    icon: Lightbulb,
    metric: "Idea to Prototype"
  },
  {
    role: "STARTUPS",
    desc: "Accelerate hardware development from concept to a manufacturable, investor-ready MVP.",
    icon: Rocket,
    metric: "POC → MVP"
  },
  {
    role: "MSMEs",
    desc: "Develop, improve, validate, and prototype new products, tooling improvements, and engineering solutions.",
    icon: Building2,
    metric: "R&D & Optimization"
  },
  {
    role: "STUDENTS",
    desc: "Gain practical exposure to real-world engineering, product development, manufacturing, and prototyping.",
    icon: GraduationCap,
    metric: "Hands-on Mastery"
  },
  {
    role: "COMPANIES",
    desc: "Access technical infrastructure and engineering capabilities for dedicated R&D, product development, and problem solving.",
    icon: Briefcase,
    metric: "Enterprise R&D"
  }
];

// Capabilities Matrix
const CAPABILITIES_MATRIX = [
  {
    title: "DESIGN",
    icon: Compass,
    skills: [
      "Engineering Design",
      "CAD Development",
      "Reverse Engineering",
      "Product Design",
      "GD&T (Geometric Tolerancing)",
      "Design for Manufacturing (DFM)",
      "Manufacturing Drawings"
    ]
  },
  {
    title: "ANALYSIS",
    icon: Scale,
    skills: [
      "First-Principles Engineering",
      "Technical Feasibility",
      "Material Selection",
      "FEA (Finite Element Analysis)",
      "Design Validation",
      "Engineering Calculations",
      "Thermal / Structural Load Auditing"
    ]
  },
  {
    title: "PROTOTYPING",
    icon: Layers,
    skills: [
      "FDM / FFF 3D Printing",
      "SLA / Resin Printing",
      "Laser Cutting & Engraving",
      "CNC Machining",
      "Wire EDM",
      "Fabrication & Welding",
      "Rapid Prototyping"
    ]
  },
  {
    title: "VALIDATION",
    icon: Microscope,
    skills: [
      "Functional Testing",
      "Dimensional Inspection",
      "Prototype Testing",
      "Design Revalidation",
      "Laboratory Validation",
      "Quality Verification",
      "Stress & Fit Verification"
    ]
  },
  {
    title: "MANUFACTURING",
    icon: Factory,
    skills: [
      "CAM Toolpath Generation",
      "Machining Planning",
      "Process Planning",
      "BOM Development",
      "Manufacturing Strategy",
      "Prototype-to-MVP Support",
      "Vendor & Supply Chain Linking"
    ]
  }
];

export default function PrototypingLab() {
  const intakeFormRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [projectForm, setProjectForm] = useState({
    projectName: '',
    stage: 'Concept / Problem Definition',
    validationNeed: 'Functional Prototyping & DFM',
    desiredOutcome: '',
    timeline: '1-3 Months',
    name: '',
    email: '',
    phone: '',
    organization: '',
    userType: 'Startup'
  });

  const scrollToForm = () => {
    if (intakeFormRef.current) {
      intakeFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white font-sans">
      
      {/* 1. TOP INSTITUTIONAL TRUST BAR */}
      <div className="border-b border-border bg-bone py-2.5 px-4 sm:px-6 text-xs font-mono">
        <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="font-bold text-foreground">SJCE-STEP</span>
            <span className="text-border">|</span>
            <span className="font-semibold text-foreground">NIDHI PRAYAS SHALA + K-TECH CIF</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span>DST (Govt. of India) Certified Facility</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="text-primary font-bold hidden sm:inline">JSS STU, Mysuru</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative border-b border-border bg-gradient-to-b from-background via-bone/30 to-background py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] relative z-10">
          
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left">
              
              {/* Lab Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-3 py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>HARDWARE PROTOTYPING & PRODUCT DEVELOPMENT LAB</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
                BUILD HARDWARE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                  THAT WORKS.
                </span>
              </h1>

              {/* Sub-headline pipeline pills */}
              <div className="w-full sm:w-auto flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground bg-bone p-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-border">
                <span className="text-foreground">Problem</span>
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground">POC</span>
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground">Prototype</span>
                <span className="text-accent font-bold">→</span>
                <span className="text-primary font-black">MVP</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                We help innovators, startups, MSMEs, students, and companies transform engineering problems and product ideas into validated, functional prototypes.
              </p>

              {/* Core Pillars */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> Research-led
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> First-principles driven
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> Engineering focused
                </span>
              </div>

              {/* Finger-Friendly CTA Buttons */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-white font-mono shadow-md shadow-accent/20 transition-all duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  START A PROJECT →
                </button>
                
                <a
                  href="#capabilities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-4 text-sm font-bold uppercase tracking-wider text-foreground font-mono transition-all duration-200 hover:border-primary hover:text-primary hover:bg-bone cursor-pointer text-center"
                >
                  EXPLORE OUR CAPABILITIES
                </a>
              </div>

            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-xl overflow-hidden">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4 font-mono text-[11px] sm:text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                    NIDHI PRAYAS SHALA FACILITY
                  </span>
                  <span className="font-bold text-primary">LIVE BENCH</span>
                </div>

                {/* Facility Image */}
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-zinc-900 border border-border">
                  <img
                    src="/assets/facility-lab.png"
                    alt="SJCE-STEP Hardware Prototyping Lab"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 sm:p-4">
                    <div className="text-white">
                      <p className="font-mono text-[10px] sm:text-xs text-accent font-bold uppercase">5,000+ SQ. FT. INFRASTRUCTURE</p>
                      <p className="text-xs sm:text-sm font-bold">Multidisciplinary Prototyping & DFM Facility</p>
                    </div>
                  </div>
                </div>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  <div className="rounded-xl bg-bone p-3 border border-border text-left">
                    <p className="font-display text-xl sm:text-2xl font-black text-primary">5,000+</p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase font-medium mt-0.5">Sq. Ft. Dedicated Lab</p>
                  </div>
                  <div className="rounded-xl bg-bone p-3 border border-border text-left">
                    <p className="font-display text-xl sm:text-2xl font-black text-accent">50+</p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase font-medium mt-0.5">Industrial Tools & Rigs</p>
                  </div>
                  <div className="rounded-xl bg-bone p-3 border border-border text-left">
                    <p className="font-display text-xl sm:text-2xl font-black text-foreground">200+</p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase font-medium mt-0.5">Projects Supported</p>
                  </div>
                  <div className="rounded-xl bg-bone p-3 border border-border text-left">
                    <p className="font-display text-xl sm:text-2xl font-black text-emerald-600">NIDHI</p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase font-medium mt-0.5">PRAYAS Certified Lab</p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">Ready to test hardware?</span>
                  <Link
                    to="/about#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Book Lab Visit →
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE PHILOSOPHY & PRINCIPLE SECTION */}
      <section className="border-b border-border bg-ink text-on-ink py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              ENGINEERING METHODOLOGY & LAB DIRECTIVE
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              FROM AN IDEA TO SOMETHING YOU CAN TEST.
            </h2>
            <p className="text-sm sm:text-base text-on-ink-muted leading-relaxed">
              Hardware development becomes expensive when teams prototype before understanding the problem.
              At SJCE-STEP, we take a research-first approach combining physical science, design calculations, and precision prototyping to de-risk hardware before tooling.
            </p>
          </div>

          {/* Master Principle Framework Card */}
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-6 sm:p-10 mb-10 text-left relative overflow-hidden">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-ink-line pb-8 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  THE GOVERNING PRINCIPLE
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white">
                  Every iteration must reduce technical uncertainty.
                </h3>
              </div>
              <div className="font-mono text-xs text-on-ink-muted max-w-md lg:text-right">
                Rather than discovering tolerance and thermal flaws after expensive machining, we isolate and resolve critical assumptions before fabrication.
              </div>
            </div>

            {/* 5 Technical Axioms */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left">
              
              <div className="rounded-xl border border-ink-line/60 bg-ink p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-accent">01 / RESEARCH</span>
                    <span className="h-2 w-2 rounded-full bg-accent/40"></span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    Research reduces uncertainty.
                  </h4>
                  <p className="text-xs text-on-ink-muted leading-relaxed">
                    Examine prior art, available materials, and physical constraints before creating geometry.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-ink-line/60 bg-ink p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-accent">02 / PHYSICS</span>
                    <span className="h-2 w-2 rounded-full bg-accent/40"></span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    First principles explain the problem.
                  </h4>
                  <p className="text-xs text-on-ink-muted leading-relaxed">
                    Break mechanics, thermal dissipation, and stress concentrations down to fundamental equations.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-ink-line/60 bg-ink p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-primary">03 / DESIGN</span>
                    <span className="h-2 w-2 rounded-full bg-primary/40"></span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    Engineering converts insight into solution.
                  </h4>
                  <p className="text-xs text-on-ink-muted leading-relaxed">
                    Transform functional math into dimensioned CAD, GD&T drawings, and assembly models.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-ink-line/60 bg-ink p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-accent">04 / TESTING</span>
                    <span className="h-2 w-2 rounded-full bg-accent/40"></span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    Testing validates the solution.
                  </h4>
                  <p className="text-xs text-on-ink-muted leading-relaxed">
                    Empirically verify fit, pressure, and electrical loads on bench rigs before full production.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-ink-line/60 bg-ink p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">05 / PROTOTYPE</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400/40"></span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    Prototyping proves it physically.
                  </h4>
                  <p className="text-xs text-on-ink-muted leading-relaxed">
                    Fabricate working physical parts with production-ready DFM awareness for MVP testing.
                  </p>
                </div>
              </div>

            </div>

            {/* The 4-Step Technical Cadence */}
            <div className="mt-8 pt-6 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <span className="text-on-ink-muted uppercase tracking-wider">LAB DIRECTIVE CADENCE:</span>
              <div className="flex flex-wrap items-center gap-2 text-white font-bold">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">1. Understand</span>
                <span className="text-accent font-bold">→</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">2. Validate</span>
                <span className="text-accent font-bold">→</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">3. Engineer</span>
                <span className="text-accent font-bold">→</span>
                <span className="px-3 py-1 bg-primary text-white border border-primary/50 rounded-md">4. Build</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT WE DO (4 Pillars) */}
      <section id="what-we-do" className="border-b border-border bg-background py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 text-left">
            <div>
              <span className="eyebrow text-primary font-semibold">CORE DELIVERABLES</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight mt-1">
                WHAT WE DO
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-xl">
                Engineering capability and end-to-end prototyping support for hardware builders.
              </p>
            </div>
            <div>
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-bold font-mono uppercase tracking-wider text-white transition-all hover:bg-orange-600 cursor-pointer"
              >
                Discuss Your Scope <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* 1. Prototype Development */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-bone px-3 py-1 rounded-md border border-border">
                    Pillar 01
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Prototype Development
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Turn concepts, engineering requirements, and CAD models into functional physical prototypes that can be subjected to real-world tests.
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                    Support Includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Concept-to-prototype dev</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Engineering design</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Material selection</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> CAD development</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Manufacturing planning</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Rapid prototyping</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary shrink-0" /> Prototype refinement</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <button
                  onClick={scrollToForm}
                  className="font-mono text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Start Prototyping →
                </button>
              </div>
            </div>

            {/* 2. POC → MVP DEVELOPMENT */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-accent/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-bone px-3 py-1 rounded-md border border-border">
                    Pillar 02
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  POC → MVP Development
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Move beyond a proof of concept. We support the transition from an initial technical demonstration toward a more functional, manufacturable, and validated MVP.
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                    Support Includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Technical feasibility</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Engineering development</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Design refinement</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Functional validation</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> DFM (Design for Mfg)</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> BOM development</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Manufacturing planning</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" /> Prototype iterations</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <button
                  onClick={scrollToForm}
                  className="font-mono text-xs font-bold text-accent inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Scale to MVP →
                </button>
              </div>
            </div>

            {/* 3. SKILL SERIES TRAINING */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-bone px-3 py-1 rounded-md border border-border">
                    Pillar 03
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Skill Series Training
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Practical, hands-on technical programs combining engineering fundamentals with direct exposure to modern design, manufacturing, and prototyping technologies.
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Designed For:
                  </p>
                  <p className="font-mono text-xs text-primary font-bold">
                    Innovators | Startups | MSMEs | Students | Companies
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 rounded-xl bg-bone px-4 py-2.5 text-xs font-bold font-mono text-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  VIEW TRAINING PROGRAMS →
                </Link>
              </div>
            </div>

            {/* 4. ADVANCED ENGINEERING TRAINING */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Settings className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-bone px-3 py-1 rounded-md border border-border">
                    Pillar 04
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Advanced Engineering Training
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Build deeper engineering capability through focused programs in high-demand technical domains.
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                    Focused Modules:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">DFM</span>
                      <span className="text-[11px] text-muted-foreground">Design for Mfg</span>
                    </div>
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">GD&T</span>
                      <span className="text-[11px] text-muted-foreground">Geometric Tolerances</span>
                    </div>
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">FEA</span>
                      <span className="text-[11px] text-muted-foreground">Stress Analysis</span>
                    </div>
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">CAD / CAM</span>
                      <span className="text-[11px] text-muted-foreground">Design to Mfg</span>
                    </div>
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">Adv. Machining</span>
                      <span className="text-[11px] text-muted-foreground">Modern Processes</span>
                    </div>
                    <div className="p-2 rounded-lg bg-bone border border-border">
                      <span className="font-bold text-foreground block font-mono">Proto. Eng</span>
                      <span className="text-[11px] text-muted-foreground">Build, Test, Iterate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to="/programs"
                  className="font-mono text-xs font-bold text-emerald-600 inline-flex items-center gap-1 hover:underline"
                >
                  View All Technical Modules →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. ENGINEERING CAPABILITIES */}
      <section id="capabilities" className="border-b border-border bg-background py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="eyebrow text-primary font-semibold">TECHNICAL DEPTH</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mt-1">
              ENGINEERING CAPABILITIES
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Full-stack mechanical and hardware capability under one roof.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES_MATRIX.map((col) => {
              const IconComp = col.icon;
              return (
                <div
                  key={col.title}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 text-left transition-all hover:border-primary hover:shadow-md flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 flex-grow">
                    {col.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Bottom Lab CTA bar */}
          <div className="mt-8 sm:mt-12 rounded-2xl bg-bone border border-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-bold text-foreground text-sm">Need specialized tooling or precision inspection?</p>
              <p className="text-xs text-muted-foreground">Explore our complete machinery catalogue including 3D printers, CNC routers, and diagnostic rigs.</p>
            </div>
            <Link
              to="/lab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-xs font-bold font-mono uppercase tracking-wider text-background hover:bg-primary hover:text-white transition-colors shrink-0"
            >
              View Full Equipment Catalog →
            </Link>
          </div>

        </div>
      </section>

      {/* 6. WHO WE BUILD WITH */}
      <section className="border-b border-border bg-bone py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="eyebrow text-accent font-semibold">ECOSYSTEM PARTNERS</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mt-1">
              WHO WE BUILD WITH
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Support for every stage of hardware development.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {WHO_WE_BUILD_WITH.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.role}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 text-left transition-all hover:border-accent hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                      {item.metric}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                      {item.role}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border">
                    <button
                      onClick={scrollToForm}
                      className="font-mono text-[11px] font-bold text-accent hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Collaborate →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. WHERE WE BUILD (FOCUS AREAS) */}
      <section className="border-b border-border bg-background py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="eyebrow text-primary font-semibold">DOMAIN SPECIALIZATION</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mt-1">
              WHERE WE BUILD
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Deep engineering domain focus across critical physical industries.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area) => {
              const IconComp = area.icon;
              return (
                <div
                  key={area.num}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 text-left transition-all hover:border-primary hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xl font-black text-foreground/30 group-hover:text-primary transition-colors">
                        {area.num}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-bone px-2 py-0.5 rounded border border-border text-muted-foreground">
                        {area.badge}
                      </span>
                    </div>

                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <IconComp className="h-5 w-5" />
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5">
                      {area.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border">
                    <button
                      onClick={scrollToForm}
                      className="font-mono text-[11px] font-bold text-primary hover:underline cursor-pointer"
                    >
                      Scope Project →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Out of Area Callout */}
          <div className="mt-8 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold font-mono text-xs sm:text-sm text-foreground uppercase tracking-wider">HAVE A PROJECT OUTSIDE THESE AREAS?</p>
              <p className="text-xs text-muted-foreground mt-0.5">We are open to technically challenging hardware projects across robotics, aerospace fixtures, clean energy, and custom mechanisms.</p>
            </div>
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold font-mono uppercase tracking-wider text-white hover:bg-violet-700 transition-colors shrink-0 cursor-pointer"
            >
              DISCUSS YOUR PROJECT
            </button>
          </div>

        </div>
      </section>

      {/* 8. THE LAB & INFRASTRUCTURE */}
      <section className="border-b border-border bg-ink text-on-ink py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 text-left">
              <span className="eyebrow text-accent font-semibold">THE FACILITY</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1 mb-3">
                THE LAB
              </h2>
              <p className="font-mono text-xs sm:text-sm text-accent uppercase font-bold tracking-wider mb-4">
                NIDHI PRAYAS SHALA + K-TECH CIF
              </p>
              <p className="text-on-ink-muted text-sm sm:text-base leading-relaxed mb-4">
                A multidisciplinary hardware development environment combining engineering expertise, prototyping infrastructure, training, testing, and product-development support.
              </p>
              <p className="text-on-ink-muted text-xs sm:text-sm leading-relaxed mb-6">
                The facility is designed to support the complete journey from concept validation to functional prototype, with direct technical guidance, precision machinery, test rigs, and project assistance.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/lab"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink font-mono hover:bg-accent hover:text-white transition-all text-center"
                >
                  EXPLORE THE LAB →
                </Link>
                <Link
                  to="/about#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-line bg-ink-soft px-5 py-3 text-xs font-bold uppercase tracking-wider text-white font-mono hover:border-white transition-all text-center"
                >
                  BOOK A LAB VISIT
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                <div className="rounded-2xl border border-ink-line bg-ink-soft p-4 sm:p-6 text-left">
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-accent">5,000+</p>
                  <p className="font-mono text-xs text-white uppercase font-bold mt-1">SQ. FT.</p>
                  <p className="text-xs text-on-ink-muted mt-1">Dedicated lab prototyping infrastructure in Mysuru.</p>
                </div>

                <div className="rounded-2xl border border-ink-line bg-ink-soft p-4 sm:p-6 text-left">
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-primary">50+</p>
                  <p className="font-mono text-xs text-white uppercase font-bold mt-1">TOOLS</p>
                  <p className="text-xs text-on-ink-muted mt-1">Rapid 3D printers, CNC milling, laser cutting, and metrology.</p>
                </div>

                <div className="rounded-2xl border border-ink-line bg-ink-soft p-4 sm:p-6 text-left">
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">200+</p>
                  <p className="font-mono text-xs text-white uppercase font-bold mt-1">PROJECTS</p>
                  <p className="text-xs text-on-ink-muted mt-1">Hardware innovations supported across startups and MSMEs.</p>
                </div>

                <div className="rounded-2xl border border-ink-line bg-ink-soft p-4 sm:p-6 text-left">
                  <p className="font-display text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">CERTIFIED</p>
                  <p className="font-mono text-xs text-white uppercase font-bold mt-1">NIDHI PRAYAS</p>
                  <p className="text-xs text-on-ink-muted mt-1">National prototyping centre under DST, Govt. of India.</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. INDUSTRY COLLABORATIONS & PARTNER LOGOS */}
      <section className="border-b border-border bg-bone py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow text-accent font-semibold">INDUSTRY COLLABORATIONS</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mt-1">
              BUILT WITH INDUSTRY.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              We work with companies to translate engineering challenges, product ideas, and R&D requirements into practical, market-ready solutions.
            </p>
          </div>

          {/* Collaborator Cards with Verified Logo Assets */}
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-10">
            
            {/* Wittyharry */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-left transition-all hover:shadow-lg hover:border-primary flex flex-col justify-between">
              <div>
                <div className="h-16 sm:h-20 flex items-center justify-start mb-4 sm:mb-6">
                  <img
                    src="/assets/wettyharry-updated.png"
                    alt="Wittyharry International Pvt. Ltd."
                    className="max-h-12 sm:max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                  WITTYHARRY INTERNATIONAL PVT. LTD.
                </h3>
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider block mb-2 sm:mb-3">
                  Industry Collaboration Partner
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Collaborative research and product engineering partner working closely on mechanical system validation and precision prototype assemblies.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Active Collaboration
                </span>
              </div>
            </div>

            {/* Fourstor */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-left transition-all hover:shadow-lg hover:border-accent flex flex-col justify-between">
              <div>
                <div className="h-16 sm:h-20 flex items-center justify-start mb-4 sm:mb-6">
                  <img
                    src="/assets/Fourstor.png"
                    alt="Fourstor Solutions Pvt. Ltd."
                    className="max-h-12 sm:max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                  FOURSTOR SOLUTIONS PVT. LTD.
                </h3>
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block mb-2 sm:mb-3">
                  Industry Collaboration Partner
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deep-tech engineering and technology systems partner supporting innovative hardware architecture and digital prototyping.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <a
                  href="https://fourstor.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
                >
                  VISIT FOURSTOR.IN <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Formula Callout */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 max-w-4xl mx-auto text-center">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              INDUSTRY COLLABORATION AT THE HEART OF OUR APPROACH
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm font-bold text-foreground">
              <span className="bg-bone px-2.5 sm:px-3 py-1 rounded-lg border border-border">Industry Problems</span>
              <span className="text-accent">+</span>
              <span className="bg-bone px-2.5 sm:px-3 py-1 rounded-lg border border-border">Engineering Capability</span>
              <span className="text-accent">+</span>
              <span className="bg-bone px-2.5 sm:px-3 py-1 rounded-lg border border-border">Prototyping Infra</span>
              <span className="text-accent">+</span>
              <span className="bg-bone px-2.5 sm:px-3 py-1 rounded-lg border border-border">Technical Talent</span>
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <span className="font-display text-sm sm:text-base md:text-lg font-black text-primary">
                = REAL-WORLD PRODUCT DEVELOPMENT
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 10. HIGH-CONVERTING PROJECT INTAKE / SCOPING ENGINE */}
      <section ref={intakeFormRef} id="start-project" className="border-b border-border bg-ink text-on-ink py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow text-accent font-semibold">PROJECT INITIATION</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1">
              READY TO BUILD?
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold text-on-ink-muted uppercase tracking-wider mt-2">
              Have a product you need to develop?
            </p>
            <p className="text-xs sm:text-base text-on-ink-muted mt-3 leading-relaxed">
              Whether you are an innovator with an idea, a startup developing an MVP, an MSME developing a new product, a student working on an engineering project, or a company solving an R&D challenge — let's discuss the technical problem.
            </p>
          </div>

          {formSubmitted ? (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6 sm:p-10 text-center max-w-2xl mx-auto">
              <div className="h-14 w-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Project Brief Received</h3>
              <p className="text-on-ink-muted text-xs sm:text-sm leading-relaxed mb-6">
                Thank you, {projectForm.name || 'Builder'}. Our engineering team at SJCE-STEP NIDHI PRAYAS SHALA will review your requirements and reach out within 24 business hours to schedule a technical discovery session.
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent">
                <span>Contact Direct: info@sjce-step.in</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="rounded-2xl border border-ink-line bg-ink-soft p-5 sm:p-10 shadow-2xl text-left">
              
              <div className="border-b border-ink-line pb-4 sm:pb-6 mb-6 sm:mb-8">
                <h3 className="font-mono text-xs uppercase font-bold tracking-[0.2em] text-accent">
                  TECHNICAL PROJECT INTAKE — SCOPING CRITERIA
                </h3>
                <p className="text-xs text-on-ink-muted mt-1">
                  Answer the key engineering parameters below to help us evaluate your feasibility.
                </p>
              </div>

              {/* Step 1 to 5 Scoping Questions */}
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 mb-6 sm:mb-8">
                
                {/* 1. What are you trying to build? */}
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                    1. What are you trying to build? *
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    required
                    placeholder="e.g., Portable UV disinfection chamber / High-torque planetary gearbox / IP67 telemetry box"
                    value={projectForm.projectName}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-white placeholder-on-ink-muted/40 focus:border-accent focus:outline-none"
                  />
                </div>

                {/* 2. What stage are you currently at? */}
                <div>
                  <label className="block font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                    2. What stage are you currently at? *
                  </label>
                  <select
                    name="stage"
                    value={projectForm.stage}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  >
                    <option value="Problem Definition / Concept">Problem Definition / Concept Ideation</option>
                    <option value="Initial Research & Calculations">Initial Research & Calculations</option>
                    <option value="Proof of Concept (POC) Built">Proof of Concept (POC) Built</option>
                    <option value="CAD Models Ready for Fabrication">CAD Models Ready for Fabrication</option>
                    <option value="Transitioning to Manufacturable MVP">Transitioning to Manufacturable MVP</option>
                  </select>
                </div>

                {/* 3. What needs to be validated? */}
                <div>
                  <label className="block font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                    3. What needs to be validated? *
                  </label>
                  <select
                    name="validationNeed"
                    value={projectForm.validationNeed}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  >
                    <option value="Mechanical & Structural Feasibility">Mechanical & Structural Feasibility</option>
                    <option value="Enclosure, Thermal & Weatherproofing">Enclosure, Thermal & Weatherproofing</option>
                    <option value="Precision DFM, GD&T & Tooling Strategy">Precision DFM, GD&T & Tooling Strategy</option>
                    <option value="Functional Working Physical Prototype">Functional Working Physical Prototype</option>
                    <option value="Complete POC → MVP Transformation">Complete POC → MVP Transformation</option>
                  </select>
                </div>

                {/* 4. What is your desired outcome? */}
                <div>
                  <label className="block font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                    4. What is your desired outcome? *
                  </label>
                  <input
                    type="text"
                    name="desiredOutcome"
                    required
                    placeholder="e.g., Working demonstrator for clinical trial / Mold-ready DFM CAD / Field unit"
                    value={projectForm.desiredOutcome}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-white placeholder-on-ink-muted/40 focus:border-accent focus:outline-none"
                  />
                </div>

                {/* 5. What is your expected timeline? */}
                <div>
                  <label className="block font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                    5. What is your expected timeline? *
                  </label>
                  <select
                    name="timeline"
                    value={projectForm.timeline}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  >
                    <option value="Immediate (1-3 Weeks)">Immediate (1-3 Weeks)</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Flexible / R&D Roadmap">Flexible / R&D Roadmap</option>
                  </select>
                </div>

              </div>

              {/* Contact Information */}
              <div className="border-t border-ink-line pt-6 mb-6 sm:mb-8">
                <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-white mb-4">
                  YOUR CONTACT DETAILS
                </h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <label className="block font-mono text-[11px] text-on-ink-muted uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={projectForm.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-ink-line bg-ink px-3 py-2.5 text-xs text-white focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-on-ink-muted uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="anand@company.com"
                      value={projectForm.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-ink-line bg-ink px-3 py-2.5 text-xs text-white focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-on-ink-muted uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={projectForm.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-ink-line bg-ink px-3 py-2.5 text-xs text-white focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-on-ink-muted uppercase mb-1">Organization / Entity</label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Startup / College / MSME Name"
                      value={projectForm.organization}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-ink-line bg-ink px-3 py-2.5 text-xs text-white focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-ink-line">
                <p className="font-mono text-xs text-on-ink-muted text-center sm:text-left">
                  Direct review by SJCE-STEP engineering leads • NDA protected
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white font-mono shadow-lg transition-all hover:bg-orange-600 active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Evaluating...' : 'START A PROJECT →'}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 11. FINAL HIGH-CONVERTING CTA BANNER */}
      <section className="bg-gradient-to-r from-primary via-violet-800 to-indigo-900 text-white py-14 sm:py-20 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1000px] relative z-10">
          <span className="eyebrow text-accent font-semibold tracking-widest block mb-2">
            ACCELERATE YOUR PHYSICAL HARDWARE
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3">
            HAVE AN IDEA? <br className="hidden sm:inline" />
            LET'S BUILD THE PROOF.
          </h2>
          
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 mb-5">
            From Problem → Research → Engineering → Validation → Prototype → MVP
          </p>

          <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            SJCE-STEP NIDHI PRAYAS SHALA + K-TECH CIF <br />
            Hardware Prototyping & Product Development Lab
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold font-mono uppercase tracking-wider text-ink shadow-xl transition-all duration-200 hover:bg-accent hover:text-white cursor-pointer active:scale-95"
            >
              START A PROJECT <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/about#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold font-mono uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 text-center"
            >
              BOOK A LAB VISIT
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
