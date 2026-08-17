import ScrambledText from '../components/ScrambledText'
import Odometer from '../components/Odometer'
import { 
  CheckCircle, 
  TrendingUp, 
  Wrench, 
  Layers, 
  Settings, 
  Trophy, 
  Lightbulb, 
  Boxes 
} from 'lucide-react'

const PROJECTS = [
  {
    title: "Weatherproof Casing Mold",
    founder: "Vriksha IoT",
    category: "Startup Project",
    icon: Boxes,
    challenge: "Sensors failed outdoors due to water seepage through standard casework during heavy rains.",
    solution: "Designed a custom gasket-sealed casing with interlocking ridges and double-walled channels.",
    tech: "PETG polymer, polyurethane resin casting, silicone seal channels, SolidWorks CAD modeling",
    support: "Machined mold patterns on CNC router, degassed silicone channels in the vacuum casting pot.",
    outcome: "Successfully deployed 25 telemetry boxes across Mysuru farms with zero moisture ingress."
  },
  {
    title: "High-Strength EV Chassis Frame",
    founder: "Mobility Systems",
    category: "Incubated Startup",
    icon: Wrench,
    challenge: "Early tubular chassis structures buckled under stress tests exceeding 2.2 kN load conditions.",
    solution: "Conducted finite element analysis (FEA) simulations to optimize reinforcing cross-braces.",
    tech: "High-tensile steel tubing, custom bracket couplers, TIG welding joints, Autodesk stress simulations",
    support: "Milled alignment mounting collars on precision lathe, supervised assembly checks.",
    outcome: "Completed structural validation tests, securing approval for vehicle trial deployments."
  },
  {
    title: "Precision Actuator Gearbox",
    founder: "Team Vyom",
    category: "Student Project",
    icon: Settings,
    challenge: "Plastic gears stripped their keyways when actuator output exceeded 1.8 Nm torque spikes.",
    solution: "Milled custom aluminum bushing inserts and press-fit them into reinforced PETG 3D prints.",
    tech: "PETG filament, 6061-T6 aluminum, Mastercam toolpaths, dual-nozzle FDM printers",
    support: "Supervised high-temp FDM printing, isolated precision lathe bushing turns.",
    outcome: "Won first prize in the national mechanical engineering showcase and filed a design patent."
  }
];

const SUCCESS_STORIES = [
  {
    team: "Vriksha IoT Solutions",
    quote: "Inside the STEP Common Infrastructure Facility, we went from raw drawings to fully sealed, field-ready casing molds in just 3 weeks. Having CNC routers and vacuum degassers on the same assembly bench saved us months of iteration.",
    author: "Rohan Gowda, Co-Founder",
    avatar: "RG"
  },
  {
    team: "Mobility Systems",
    quote: "The makerspace gave us 24/7 access to lathes and stress simulation software. Without expert engineering design feedback on load tolerances and bracket fatigue points, our structural chassis would not have passed checks.",
    author: "Anjali Hegde, Structural Lead",
    avatar: "AH"
  }
];

const GALLERY_PHOTOS = [
  { img: "/assets/project-agritech.png", label: "Gasket-Sealed Enclosure" },
  { img: "/assets/project-robotics.png", label: "Custom Actuator Linkages" },
  { img: "/assets/project-iot.png", label: "Precision Machined Bushings" },
  { img: "/assets/facility-lab.png", label: "Makerspace Tooling Bench" }
];

export default function ProjectsImpact() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 text-on-ink">
        <div aria-hidden="true" className="chevron-shape absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2 bg-white/5 pointer-events-none"></div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-left">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Projects & Impact
            </span>
            <h1 className="text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-[4rem] text-white">
              Ideas are great. <span className="font-bold text-accent">Prototypes</span> are better.
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-on-ink-muted">
              We focus on tangible mechanical validation. Explore physical structures and enclosures designed, milled, and assembled inside the SJCE-STEP prototyping facility.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED PROJECT SHOWCASE */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 text-left">
            <p className="eyebrow text-primary"><ScrambledText text="Innovator Portfolios" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Featured Mechanical Projects
            </h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-xl leading-relaxed">
              Each case study documents a full design iteration sprint—resolving material shear, fit tolerances, and layout constraints to build functional hardware.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PROJECTS.map((proj, idx) => {
              return (
                <div key={idx} className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border pb-4 mb-5 text-left">
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{proj.title}</h4>
                        <span className="text-[10px] font-mono text-muted-foreground">by {proj.founder}</span>
                      </div>
                      <span className="text-[9px] font-semibold tracking-wider font-mono uppercase bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                        {proj.category}
                      </span>
                    </div>

                    {/* Challenges Grid */}
                    <div className="space-y-4 text-left">
                      <div>
                        <span className="text-[10px] font-bold font-mono uppercase text-accent tracking-wider block">The Challenge</span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{proj.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono uppercase text-primary tracking-wider block">The Solution</span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{proj.solution}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground tracking-wider block">Material & Tools</span>
                        <p className="text-xs text-foreground/85 mt-1 font-mono leading-relaxed">{proj.tech}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground tracking-wider block">Makerspace Support</span>
                        <p className="text-xs text-foreground/80 mt-1 leading-relaxed">{proj.support}</p>
                      </div>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-start gap-2 bg-bone/30 p-3 rounded-lg text-left">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold font-mono uppercase text-green-600 tracking-wider block">Outcome</span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-semibold mt-0.5">{proj.outcome}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROTOTYPE TO PRODUCT JOURNEY */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            
            <div className="text-left">
              <p className="eyebrow text-accent"><ScrambledText text="Incubation Pipeline" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                From Prototype to Mass Production
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                The Hardware Prototyping Lab is the entry point to the wider SJCE-STEP business incubation network. We assist founders in designing tooling molds and testing load capabilities so that they can validate designs before cutting metal dies.
              </p>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                Once structural viability is proven, successful projects are fast-tracked into workspace slots, helping them apply for DST pre-incubation grants, connect with corporate buyers, and deploy parts to market.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center font-mono text-xs font-bold text-foreground">
                <span>CAD DRAWING</span>
                <span className="text-accent">→</span>
                <span>FABRICATE</span>
                <span className="text-accent">→</span>
                <span>ASSEMBLY FIT</span>
                <span className="text-accent">→</span>
                <span>BATCH MOLD</span>
                <span className="text-accent">→</span>
                <span>MASS TOOLING</span>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-8 flex flex-col justify-between relative overflow-hidden text-left">
              <div aria-hidden="true" className="chevron-shape absolute -right-10 -top-8 h-28 w-36 bg-primary/5"></div>
              <h3 className="text-lg font-bold mb-4">Incubation Connection</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Developing hardware is capital intensive. By linking with the STEP business incubator, mechanical builders get:
              </p>
              <ul className="space-y-3.5 mt-5 font-semibold text-xs text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✔</span> Grant-in-aid pathways (up to ₹10L DST Prayas)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✔</span> Custom tooling partner discounts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✔</span> Shared office space & business support
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-primary"><ScrambledText text="Visual Gallery" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Makerspace Gallery
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Snapshots of mechanical builds, CNC setups, and custom enclosures in progress.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_PHOTOS.map((ph, idx) => (
              <div key={idx} className="rounded-xl border border-border overflow-hidden bg-bone shadow-sm relative group h-64">
                <img
                  src={ph.img}
                  alt={ph.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-semibold font-mono tracking-wide text-left">{ph.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
