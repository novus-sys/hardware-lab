import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Check, 
  Users, 
  TrendingUp, 
  Coins, 
  Wrench, 
  FileText 
} from 'lucide-react'

const ECOSYSTEM = [
  { title: "Incubation Space", desc: "Co-working desks, private cabins, fiber internet, and meeting rooms.", icon: Users },
  { title: "Mentorship Network", desc: "Direct access to industry CTOs, patent attorneys, and hardware design experts.", icon: ShieldCheck },
  { title: "Funding Support", desc: "Seed funding via SISFS, DST NIDHI Prayas grants, and investor connect.", icon: Coins },
  { title: "Industry Connect", desc: "Direct link to local manufacturing vendors, mold fabricators, and test houses.", icon: TrendingUp },
  { title: "Startup Support", desc: "Incorporation guidance, legal counsel, audits, and compliance management.", icon: FileText },
  { title: "Hardware Prototyping", desc: "24/7 makerspace access with specialized diagnostic and layout machines.", icon: Wrench }
];



const PARTNERS = [
  "Department of Science & Technology (Govt of India)",
  "K-Tech (Govt of Karnataka)",
  "Karnataka Digital Economy Mission (KDEM)",
  "JSS Science and Technology University (JSS STU)",
  "Startup India Hub"
];

export default function AboutContact() {
  const location = useLocation();
  const contactFormRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    building: '',
    help: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hash-based scroll handling
  useEffect(() => {
    if (location.hash === '#contact' && contactFormRef.current) {
      setTimeout(() => {
        contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.building) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        org: '',
        building: '',
        help: ''
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 text-on-ink">
        <div aria-hidden="true" className="chevron-shape absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2 bg-white/5 pointer-events-none"></div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              About & Contact
            </span>
            <h1 className="text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-[4rem] text-white max-w-4xl text-left">
              Building the infrastructure for India's <span className="font-bold text-accent">hardware</span> innovators.
            </h1>
            <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-on-ink-muted text-left">
              The SJCE-STEP Hardware Prototyping Lab was created to lower the barriers to entry for physical product engineering, providing innovators with machines, expertise, and a network.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THE LAB */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-primary"><ScrambledText text="Our Mission" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Bridging the Hardware Innovation Gap
              </h2>
            </div>
            <div className="space-y-6 text-left">
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Unlike pure software development, physical hardware prototyping requires specialized fabrication equipment, diagnostic tools, and supervised workspace safety rules. Purchasing these individually is cost-prohibitive for early innovators.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                The SJCE-STEP Hardware Prototyping Lab bridges this infrastructure gap. By offering shared access to precision machinery alongside design reviews, we reduce the cost and risk of hardware iterations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SJCE-STEP ECOSYSTEM */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-24 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-accent"><ScrambledText text="Startup Engine" /></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              The SJCE-STEP Ecosystem
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              We connect physical prototyping to commercial growth through six key verticals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.map((eco, idx) => {
              const IconComp = eco.icon;
              return (
                <div key={idx} className="rounded-xl border border-border bg-background p-6 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2">{eco.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{eco.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <span className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-6 py-3.5 text-xs font-mono tracking-wide text-primary font-bold">
              Prototype here. Build your startup here. Grow through the ecosystem.
            </span>
          </div>
        </div>
      </section>



      {/* CONFIRMED ECOSYSTEM PARTNERS */}
      <section className="bg-bone px-5 py-16 md:px-10 md:py-20 border-t border-b border-border">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="eyebrow text-accent"><ScrambledText text="Affiliations & Support" /></p>
          <h3 className="text-xl font-bold mt-4 mb-10 text-foreground">Our Ecosystem Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
            {PARTNERS.map((partner, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg px-5 py-3 text-xs font-mono font-semibold text-muted-foreground shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / ENQUIRY SECTION */}
      <section ref={contactFormRef} id="contact" className="px-5 py-20 md:px-10 md:py-28 text-left">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left Info Column */}
            <div>
              <p className="eyebrow text-primary"><ScrambledText text="Get In Touch" /></p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Let's build something.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                Have a physical product project, a capstone prototype design, or want to discuss startup makerspace slots? Reach out to our engineering screening desk below.
              </p>

              {/* Physical Details */}
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block">Facility Address</span>
                    <span className="text-xs text-foreground/90 font-medium leading-relaxed block mt-0.5">
                      SJCE-STEP, JSS Science & Technology University Campus, Manasagangothri, Mysuru, Karnataka 570006
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block">General Inquiries</span>
                    <a href="mailto:info@sjcestep.in" className="text-xs text-primary hover:underline font-semibold block mt-0.5">
                      info@sjcestep.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block">Phone</span>
                    <span className="text-xs text-foreground/90 font-semibold block mt-0.5">
                      +91-821-2548261
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase text-muted-foreground block">Lab Hours</span>
                    <span className="text-xs text-foreground/90 font-medium block mt-0.5 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 6:00 PM <br />
                      <span className="text-accent font-semibold">(24/7 access for incubated startup cohorts)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="bg-bone border border-border rounded-2xl p-8 relative overflow-hidden">
              <div aria-hidden="true" className="chevron-shape absolute -right-12 -top-10 h-28 w-36 bg-primary/5 pointer-events-none"></div>
              
              <h3 className="text-xl font-bold mb-1">Enquiry Form</h3>
              <p className="text-xs text-muted-foreground mb-6">Describe your prototype scope below. Our lab lead will contact you.</p>

              {formSubmitted ? (
                <div className="bg-background border border-green-200 rounded-xl p-6 text-center my-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-foreground text-base">Enquiry Submitted!</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Thank you for sharing your product concept. Our technical lead will review your specifications and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-primary font-bold hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">Organisation / College</label>
                      <input
                        type="text"
                        placeholder="Institution name"
                        value={formData.org}
                        onChange={(e) => setFormData({...formData, org: e.target.value})}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">What are you building? *</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Explain your physical hardware project, target sensors, casing specifications, or target design..."
                      value={formData.building}
                      onChange={(e) => setFormData({...formData, building: e.target.value})}
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold font-mono uppercase text-muted-foreground mb-1.5">What do you need help with?</label>
                    <textarea
                      rows="2"
                      placeholder="e.g. 3D printing casing, milling PCB traces, signal noise debugging, mentorship..."
                      value={formData.help}
                      onChange={(e) => setFormData({...formData, help: e.target.value})}
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-accent py-3 text-xs font-semibold text-white tracking-wider uppercase font-mono transition-all duration-300 hover:bg-orange-600 disabled:opacity-75 cursor-pointer mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
