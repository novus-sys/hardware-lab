import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'
import Odometer from '../components/Odometer'
import { 
  Wrench, 
  Layers, 
  Settings, 
  Car, 
  Sprout, 
  Boxes, 
  GraduationCap, 
  Rocket, 
  Search, 
  Briefcase,
  Lightbulb,
  PenTool,
  Monitor
} from 'lucide-react'

const IDEA_METHODOLOGY = [
  {
    letter: "I",
    rest: "DEATION",
    icon: Lightbulb,
    desc: "Application of design thinking methodologies and consultancy on key design elements.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    letter: "D",
    rest: "ESIGN",
    icon: PenTool,
    desc: "Advanced product and engineering design leading to rapid prototyping.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    letter: "E",
    rest: "NGINEERING",
    icon: Settings,
    desc: "Gain access to a pool of technology experts and equipment in various industries.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    letter: "A",
    rest: "PPLICATION",
    icon: Monitor,
    desc: "Bringing products to mass production through contract manufacturers and production lines.",
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

const WHAT_YOU_BUILD = [
  { name: "Custom Enclosures & Casings", icon: Boxes },
  { name: "Precision Mechanical Linkages", icon: Settings },
  { name: "Structural Frames & Chassis", icon: Wrench },
  { name: "Automotive & Mobility Parts", icon: Car },
  { name: "Agricultural Implements", icon: Sprout },
  { name: "Functional Machine Assemblies", icon: Layers }
];

const BUILT_FOR = [
  {
    title: "Students",
    icon: GraduationCap,
    desc: "Build academic projects, capstone mechanical models, and validate student design concepts."
  },
  {
    title: "Startups",
    icon: Rocket,
    desc: "Rapidly fabricate physical casing MVPs, assemble mechanical components, and test functional hardware."
  },
  {
    title: "Researchers",
    icon: Search,
    desc: "Design custom structural setups, precision test rigs, and translate research details to working systems."
  },
  {
    title: "Industry & Innovators",
    icon: Briefcase,
    desc: "Develop, test, and iterate custom mechanical tools, enclosures, or small-batch production runs."
  }
];

const JOURNEY_STEPS = [
  { step: "01", name: "CONCEPT", desc: "Mechanical Ideation" },
  { step: "02", name: "ENGINEERING DESIGN", desc: "SolidWorks & CAM modeling" },
  { step: "03", name: "FABRICATE", desc: "3D Printing & CNC" },
  { step: "04", name: "ASSEMBLY", desc: "Mechanical Fitting" },
  { step: "05", name: "PRODUCTION", desc: "Molding & Scaling" }
];

const FEATURED_PROJECTS = [
  {
    title: "Heavy-Duty EV Chassis Frame",
    category: "Mobility",
    desc: "Welded and milled high-strength steel chassis frame optimized for modular urban logistics.",
    img: "/assets/project-robotics.png"
  },
  {
    title: "Weatherproof Casing Mold",
    category: "Enclosures",
    desc: "A gasket-sealed, moisture-proof polycarbonate enclosure for field telemetry deployments.",
    img: "/assets/project-agritech.png"
  },
  {
    title: "Precision Gearbox Drive",
    category: "Mechanisms",
    desc: "High-accuracy custom gear assembly for mechanical actuators and torque transmission.",
    img: "/assets/project-iot.png"
  }
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Hero background video playback failed: ", err);
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-black min-h-[calc(100vh-72px)] overflow-hidden flex items-center">
        <video
          ref={videoRef}
          key="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/website-hero-video.mp4"
          className="absolute inset-0 h-full w-full object-cover scale-120 origin-center z-0 opacity-40"
        />
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10 pointer-events-none" />
        
        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28 text-left">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              SJCE-STEP Common Infrastructure Facility
            </span>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[4rem] text-white font-normal">
              Mechanical <span className="font-bold text-accent">Prototyping</span><br />
              & Production Lab
            </h1>
            <h2 className="text-xl md:text-2xl text-on-ink-muted font-display font-medium mt-1">
              From an idea to a working physical product.
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-on-ink-muted">
              A high-end engineering fabrication makerspace helping students, startups, researchers, and innovators design, fabricate, assemble, and scale physical mechanical products.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about#contact"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
              >
                Start Prototyping
              </Link>
              <Link
                to="/lab"
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE METHODOLOGY (I-D-E-A SECTION) */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-primary"><ScrambledText text="Operational Pipeline" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Core Methodology
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base">
              Our structured approach takes hardware concepts from the drawing board to small-batch production runs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {IDEA_METHODOLOGY.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-1 duration-300 text-center items-center">
                  <div className="flex flex-col items-center">
                    {/* Centered Icon */}
                    <div className={`w-16 h-16 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    {/* I-D-E-A Highlighted Text */}
                    <h3 className="text-2xl font-bold text-foreground tracking-wide mb-4">
                      <span className="text-accent">{item.letter}</span>{item.rest}
                    </h3>
                    <div className="w-12 h-[2px] bg-border mb-4"></div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PROTOTYPING JOURNEY */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-accent"><ScrambledText text="The Maker Path" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              The Prototyping Journey
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              An agile loop of design and verification designed for speed and mechanical tolerance.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden group">
                <div 
                  aria-hidden="true" 
                  className={`chevron-shape absolute -right-8 -top-6 h-24 w-28 transition-all duration-300 ease-in-out chevron-sweep-${idx}`}
                ></div>
                <div className="relative z-10 font-mono text-xs font-semibold text-accent">{step.step}</div>
                <div className="relative z-10 mt-8 text-left">
                  <h3 className="font-bold text-base tracking-wide text-foreground leading-snug">{step.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-1.5 uppercase font-mono leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS / SOCIAL PROOF */}
      <section className="relative overflow-hidden bg-ink py-20 text-on-ink">
        <div aria-hidden="true" className="chevron-shape absolute -right-16 top-1/2 h-48 w-60 -translate-y-1/2 bg-white/5"></div>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display text-white">
                <Odometer value={25} suffix="+" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-widest text-on-ink-muted uppercase">Fabrication Machines</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display text-white">
                <Odometer value={120} suffix="+" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-widest text-on-ink-muted uppercase">Mechanical Prototypes</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display text-white">
                <Odometer value={180} suffix="+" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-widest text-on-ink-muted uppercase">Builders Supported</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display text-white">
                <Odometer value={70} suffix="+" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-widest text-on-ink-muted uppercase">Machine Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN YOU BUILD */}
      <section className="px-5 py-20 md:px-10 md:py-28 border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            
            {/* Left Info Column */}
            <div className="text-left">
              <p className="eyebrow text-primary"><ScrambledText text="Machining Output" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                What can you build inside the lab?
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                Our lab environment is customized entirely for structural fabrication and casing runs. Whether you are assembling custom mechanical chassis links, laser cutting acrylic panels, or molding casings, our equipment supports your design requirements.
              </p>
              <div className="mt-8">
                <Link
                  to="/lab"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-violet-deep hover:underline cursor-pointer"
                >
                  Explore mechanical tooling catalogue
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Capabilities Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {WHAT_YOU_BUILD.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 rounded-xl border border-border p-5 bg-card hover:bg-bone/30 transition-colors text-left">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">{item.name}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* BUILT FOR BUILDERS */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28 border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-accent"><ScrambledText text="Target Ecosystem" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Built for Builders
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              We cater to diverse cohorts, providing tools for both rapid iteration and custom casing production.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUILT_FOR.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div key={idx} className="rounded-xl border border-border bg-background p-7 flex flex-col justify-between relative overflow-hidden group text-left">
                  <div aria-hidden="true" className="chevron-shape absolute -right-10 -top-8 h-20 w-28 bg-primary/5 transition-colors group-hover:bg-accent/15"></div>
                  <div>
                    <div className="text-accent mb-4">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROTOTYPE SHOWCASE */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="text-left">
              <p className="eyebrow text-primary"><ScrambledText text="Physical Proofs" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Featured Mechanical Prototypes
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-bone/40 transition-colors"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-bone">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded-full bg-accent text-white font-mono text-[9px] uppercase tracking-wider font-semibold">
                    {proj.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{proj.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground mt-2">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-primary px-5 py-20 md:px-10 md:py-28">
        <div aria-hidden="true" className="chevron-shape absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2 bg-white/12 pointer-events-none"></div>
        <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-10">
          <div className="max-w-2xl text-left text-primary-foreground">
            <svg viewBox="0 0 64 40" fill="none" aria-hidden="true" className="h-8 w-auto text-primary-foreground opacity-60">
              <path d="M2 2h16l18 18-18 18H2l18-18L2 2Z" fill="currentColor"></path>
              <path d="M28 2h16l18 18-18 18H28l18-18L28 2Z" fill="currentColor"></path>
            </svg>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Have a physical product idea?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Tell us what mechanical parts or custom casings you're designing. We will provide the workspace, tools, and technical guidance to help you fabricate and scale.
            </p>
          </div>
          <Link
            to="/about#contact"
            className="relative z-10 inline-flex items-center rounded-lg bg-ink px-8 py-4 text-base font-semibold text-on-ink transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Start Prototyping
          </Link>
        </div>
      </section>

    </main>
  );
}
