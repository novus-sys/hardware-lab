import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'
import { 
  Wrench, 
  Layers, 
  Settings, 
  Info,
  Eye,
  Search,
  Hammer,
  Boxes,
  HelpCircle,
  AlertTriangle
} from 'lucide-react'

const CAPABILITIES = [
  {
    num: "01",
    title: "Digital Fabrication",
    items: ["High-resolution FDM 3D Printing", "Precision SLA Resin Prototyping", "Rapid Polyurethane Patterning", "Laser Vector Cutting"],
    icon: Layers
  },
  {
    num: "02",
    title: "Subtractive CNC Machining",
    items: ["Precision Desktop CNC Routing", "Rotational Turning & Lathe Work", "Boring & Counter-milling", "High-speed Toolpath Drilling"],
    icon: Settings
  },
  {
    num: "03",
    title: "Mechanical Design & CAD/CAM",
    items: ["3D Assembly Layout modeling", "Finite Element Stress Simulation", "CAM Toolpath Verification", "Material Tolerance Auditing"],
    icon: Wrench
  },
  {
    num: "04",
    title: "Tooling & Sheet Metal",
    items: ["Manual Sheet Bending & Folding", "Miter Cutting & Deburring", "Rigid Fastener Assembly Benches", "Precision Drill Pressing"],
    icon: Hammer
  },
  {
    num: "05",
    title: "Casting & Molding",
    items: ["Vacuum Degassing & Pot Casting", "Polyurethane Casing Copies", "Silicone Mold Fabrication", "Tooling Block Model Shaping"],
    icon: Boxes
  }
];

const EQUIPMENT_CATALOGUE = [
  {
    name: "Ultimaker S5 Professional FDM 3D Printer",
    category: "3D Printing",
    capabilities: "Dual-extrusion industrial PLA/ABS printing for structural housings.",
    specs: "Build volume: 330 x 240 x 300 mm, auto-leveling, printing with PLA, Nylon, ABS, PVA.",
    usecase: "High-precision mechanical enclosures, snap-fit casings, and functional mechanical assemblies.",
    status: "Available",
    img: "/assets/project-iot.png"
  },
  {
    name: "Formlabs Form 3+ SLA Resin 3D Printer",
    category: "3D Printing",
    capabilities: "High-detail liquid resin printing for smooth cosmetic casing surfaces.",
    specs: "Build volume: 145 x 145 x 185 mm, 25-micron layer thickness, support for Tough and Flexible resins.",
    usecase: "High-detail injection mold master models, consumer casing prototypes, and flexible rubber seals.",
    status: "Available",
    img: "/assets/project-agritech.png"
  },
  {
    name: "CO2 Laser Cutter & Engraver (60W)",
    category: "Laser & Sheet Metal",
    capabilities: "Vector cutting and raster etching on sheet stock.",
    specs: "Bed size: 600 x 400 mm, cuts acrylic, MDF, and plywood up to 8mm thickness.",
    usecase: "Custom bracket layers, flat-pack chassis frames, structural brackets, and acrylic faceplates.",
    status: "Available",
    img: "/assets/facility-lab.png"
  },
  {
    name: "Carvey Desktop Precision CNC Router",
    category: "CNC Machining",
    capabilities: "3-axis computer-controlled engraving and milling.",
    specs: "Bed size: 300 x 200 x 70 mm, automatic Z-zero probe, cuts tooling board, plastics, and aluminum.",
    usecase: "Custom mechanical links, mounting brackets, structural aluminum plates, and layout engravings.",
    status: "Available",
    img: "/assets/project-robotics.png"
  },
  {
    name: "Precision Benchtop Lathe",
    category: "CNC Machining",
    capabilities: "Rotational turning, thread cutting, and facing.",
    specs: "Variable speed control, 8 x 16 inch work capacity, manual and automatic feed lines.",
    usecase: "Custom shafts, metal spacers, threaded sleeves, pins, and custom mechanical couplers.",
    status: "Available",
    img: "/assets/project-robotics.png"
  },
  {
    name: "Professional Vacuum Casting Chamber",
    category: "Casting & Molding",
    capabilities: "Degassing and low-pressure polyurethane mold filling.",
    specs: "300 x 300 mm vacuum pot chamber, integrated digital vacuum timer control.",
    usecase: "Degassing silicone molds, pouring bubble-free polyurethane copies, and casing replicas.",
    status: "Available",
    img: "/assets/facility-lab.png"
  },
  {
    name: "Precision Benchtop Drill Press",
    category: "Tooling & Assembly",
    capabilities: "High-accuracy hole drilling and countersinking.",
    specs: "12-speed spindle, keyless chuck, physical depth gauge stop, cross-hair laser guide grid.",
    usecase: "Accurate drilling of metal brackets, boring shaft openings in plastic plates, and pilot alignment.",
    status: "Available",
    img: "/assets/facility-lab.png"
  }
];

const FILTER_CATEGORIES = ["All", "3D Printing", "CNC Machining", "Laser & Sheet Metal", "Casting & Molding", "Tooling & Assembly"];

export default function LabCapabilities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const filteredEquipment = EQUIPMENT_CATALOGUE.filter(eq => {
    const matchesSearch = eq.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          eq.capabilities.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          eq.usecase.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'All' || eq.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 text-on-ink">
        <div aria-hidden="true" className="chevron-shape absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2 bg-white/5 pointer-events-none"></div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-left">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Lab Capabilities
            </span>
            <h1 className="text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-[4rem] text-white">
              The tools to turn <span className="font-bold text-accent">designs</span> into products.
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-on-ink-muted">
              Explore the professional-grade mechanical prototyping tools, machining stations, and casting setups available at the SJCE-STEP makerspace.
            </p>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 text-left">
            <p className="eyebrow text-primary"><ScrambledText text="Technical Competencies" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Mechanical Prototyping Capabilities
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-sm leading-relaxed">
              We operate across five specialized fabrication divisions, supporting innovators from basic structural layouts to casting finished enclosures.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div key={cap.num} className="rounded-xl border border-border p-7 bg-card relative overflow-hidden group text-left">
                  <div aria-hidden="true" className="chevron-shape absolute -right-10 -top-8 h-20 w-28 bg-primary/5 transition-colors group-hover:bg-accent/15"></div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-semibold">{cap.num}</span>
                    <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                  </div>
                  <div className="mt-6 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <ul className="space-y-2.5">
                    {cap.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-accent shrink-0">▶</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEARCHABLE / FILTERABLE EQUIPMENT CATALOGUE */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <p className="eyebrow text-accent"><ScrambledText text="Inventory Specs" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Equipment Catalogue
              </h2>
              <p className="mt-2 text-muted-foreground text-xs">
                Search and filter through mechanical tools available inside the workspace.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search equipment, specs, use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold font-mono tracking-wide transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background border border-border text-muted-foreground hover:bg-background/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Equipment Grid */}
          {filteredEquipment.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEquipment.map((eq, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-background p-6 flex flex-col justify-between hover:shadow-lg transition-shadow text-left">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border pb-3.5 mb-4">
                      <span className="text-[9px] font-semibold tracking-wider font-mono uppercase bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                        {eq.category}
                      </span>
                      <span className="text-[10px] text-green-600 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                        {eq.status}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-foreground leading-snug">{eq.name}</h3>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                      {eq.capabilities}
                    </p>

                    {/* Specs / Best Usecase */}
                    <div className="mt-4 space-y-2.5 pt-4 border-t border-border/60">
                      <div className="flex gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-semibold font-mono uppercase text-muted-foreground block">Key Specifications</span>
                          <span className="text-xs text-foreground/80 leading-relaxed block">{eq.specs}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Eye className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-semibold font-mono uppercase text-muted-foreground block">Best Use Case</span>
                          <span className="text-xs text-foreground/80 leading-relaxed block">{eq.usecase}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex gap-3">
                    <button
                      onClick={() => setSelectedEquipment(eq)}
                      className="flex-1 text-center rounded-lg border border-border bg-card py-2.5 text-xs font-semibold text-foreground hover:bg-bone/45 transition-colors cursor-pointer"
                    >
                      More Specs
                    </button>
                    <Link
                      to="/about#contact"
                      className="flex-1 text-center rounded-lg bg-accent py-2.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors cursor-pointer font-mono tracking-wider uppercase text-[9px] flex items-center justify-center"
                    >
                      Book Machine
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-background rounded-xl border border-border p-12 max-w-md mx-auto mt-10">
              <p className="text-muted-foreground text-sm font-semibold">No tools match your query.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveFilter('All'); }}
                className="mt-4 text-xs text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LARGE INFRASTRUCTURE SECTION */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Facility Images */}
            <div className="rounded-2xl border border-border overflow-hidden bg-bone shadow-2xl relative">
              <img
                src="/assets/facility-lab.png"
                alt="SJCE-STEP Hardware Prototyping Lab Facility Area"
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-ink/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-on-ink text-left">
                <span className="font-mono text-[9px] text-accent uppercase tracking-wider block">Machining Workstations</span>
                <span className="text-xs text-on-ink-muted leading-relaxed block mt-1">Our lab features designated layout benches, assembly spaces, vertical drills, and collaborative planning tables.</span>
              </div>
            </div>

            {/* Infrastructure Details */}
            <div className="text-left">
              <p className="eyebrow text-primary"><ScrambledText text="Lab Infrastructure" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Optimized Layout for Rapid Machining
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                The lab's layout is structured to optimize the flow from drawings to final assembly. Workstations place CAM rendering systems adjacent to CNC milling and lathe blocks, and manual folding and drilling immediately adjacent to mechanical assembly decks.
              </p>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                Startups, students, and researchers work in a shared, multi-disciplinary environment that supports collaborative iterations, engineering problem solving, and supervised tool use.
              </p>

              <div className="mt-8 grid gap-4 grid-cols-2">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-sm font-bold text-foreground">3D Printing Deck</h4>
                  <p className="text-xs text-muted-foreground mt-1">FDM & high-detail SLA printing.</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="text-sm font-bold text-foreground">CNC Machining Area</h4>
                  <p className="text-xs text-muted-foreground mt-1">Lathe turning and mills.</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-sm font-bold text-foreground">Sheet & Tool deck</h4>
                  <p className="text-xs text-muted-foreground mt-1">Folding, shearing, and drilling.</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="text-sm font-bold text-foreground">Casting Bench</h4>
                  <p className="text-xs text-muted-foreground mt-1">Silicone molding and vacuum casting.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY & RESPONSIBLE USE */}
      <section className="bg-ink py-20 md:py-24 text-on-ink px-5 md:px-10 border-t border-ink-line">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            
            {/* Left Box */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden text-left">
              <div aria-hidden="true" className="chevron-shape absolute -right-8 -top-8 h-20 w-28 bg-white/5"></div>
              <div className="text-accent mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Responsible Prototyping</h3>
              <p className="text-sm text-on-ink-muted leading-relaxed mt-3">
                Fabrication tools require strict operational guidelines. Spinning CNC bits, laser operations, and casting chemicals can cause injuries if handled without training.
              </p>
            </div>

            {/* Right List */}
            <div className="space-y-6 text-left">
              <div>
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="text-accent">▶</span> Machinery Orientations
                </h4>
                <p className="text-sm text-on-ink-muted mt-1 leading-relaxed pl-5">
                  Before operating lathe turners, laser cutters, or CNC units, all users must complete a 15-minute equipment-specific safety briefing.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="text-accent">▶</span> PPE Requirements
                </h4>
                <p className="text-sm text-on-ink-muted mt-1 leading-relaxed pl-5">
                  Personal Protective Equipment (safety goggles, dust masks, and heat-resistant gloves) is provided and mandatory on the machining deck.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="text-accent">▶</span> Technical Supervision
                </h4>
                <p className="text-sm text-on-ink-muted mt-1 leading-relaxed pl-5">
                  All CNC carving, lathes, and casting work must be scheduled during supervised laboratory hours. Our technicians are on-site to assist.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EQUIPMENT DETAILS MODAL */}
      {selectedEquipment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedEquipment(null)}
        >
          <div 
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-background p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left flex flex-col md:flex-row gap-6 md:gap-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer p-1.5 rounded-lg border border-border/40 hover:bg-bone/40 transition-colors"
              aria-label="Close modal"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Image Column */}
            <div className="w-full md:w-1/2 shrink-0">
              <div className="aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-bone border border-border h-full max-h-[260px] md:max-h-[340px]">
                <img 
                  src={selectedEquipment.img} 
                  alt={selectedEquipment.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content Column */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <span className="inline-block text-[9px] font-semibold tracking-wider font-mono uppercase bg-accent/15 text-accent px-2 py-0.5 rounded-full mb-3">
                  {selectedEquipment.category}
                </span>
                <h3 className="text-xl font-bold text-foreground leading-snug">{selectedEquipment.name}</h3>
                
                <p className="text-[10px] text-green-600 font-mono mt-1.5 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  Active & Available in Lab
                </p>

                <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-medium">
                  {selectedEquipment.capabilities}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block tracking-wider">Specifications</span>
                    <p className="text-xs text-foreground/90 mt-1 leading-relaxed">{selectedEquipment.specs}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block tracking-wider">Best Use Case</span>
                    <p className="text-xs text-foreground/90 mt-1 leading-relaxed">{selectedEquipment.usecase}</p>
                  </div>
                  
                  {/* Additional Dynamic Info Benches */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4 border-t border-border/60">
                    <div>
                      <span className="text-[9px] font-bold font-mono uppercase text-muted-foreground block">Supervisor Needed</span>
                      <span className="text-xs text-foreground/80 mt-0.5 block font-medium">Yes, Senior Tech</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold font-mono uppercase text-muted-foreground block">Safety Level</span>
                      <span className="text-xs text-foreground/80 mt-0.5 block font-medium">Level 2 (PPE Req)</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold font-mono uppercase text-muted-foreground block">Booking Buffer</span>
                      <span className="text-xs text-foreground/80 mt-0.5 block font-medium">24 Hours Pre-booking</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold font-mono uppercase text-muted-foreground block">Incubator Discount</span>
                      <span className="text-xs text-foreground/80 mt-0.5 block font-medium">50% Off Tooling</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  to="/about#contact"
                  onClick={() => setSelectedEquipment(null)}
                  className="block text-center rounded-lg bg-accent py-3 text-xs font-semibold text-white tracking-wider uppercase font-mono transition-colors hover:bg-orange-600 cursor-pointer"
                >
                  Request Machine Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
