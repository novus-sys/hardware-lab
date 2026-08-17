import { Link } from 'react-router-dom'
import ScrambledText from './ScrambledText'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink py-16 text-on-ink-muted">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="cursor-pointer">
              <img
                src="/assets/full whitee-bgremove.png"
                alt="SJCE-STEP"
                width="160"
                height="80"
                className="opacity-90 object-contain w-32"
              />
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white">
              Hardware Prototyping Lab
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-on-ink-muted mt-2">
              A hardware innovation platform helping students, startups, researchers and innovators design, build, test and iterate physical products.
            </p>
            <p className="text-xl font-bold font-display text-white mt-1">
              Build. Test. Iterate.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/lab" className="text-sm font-semibold transition-colors hover:text-white hover:underline cursor-pointer">
                  Lab & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm font-semibold transition-colors hover:text-white hover:underline cursor-pointer">
                  Programs & Access
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm font-semibold transition-colors hover:text-white hover:underline cursor-pointer">
                  Projects & Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-semibold transition-colors hover:text-white hover:underline cursor-pointer">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-2">
              Location & Access
            </h4>
            <p className="text-sm leading-relaxed max-w-xs text-left">
              SJCE-STEP, JSS Science and Technology University (SJCE) Campus, Manasagangothri, Mysuru, Karnataka 570006
            </p>
            <p className="text-sm">
              Email:{' '}
              <a href="mailto:info@sjcestep.in" className="text-white hover:underline">
                info@sjcestep.in
              </a>
            </p>
            
            {/* Social Icons / Links */}
            <div className="mt-4 flex gap-4 font-mono text-[10px] uppercase tracking-wider">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-ink-muted hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-ink-line">|</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-ink-muted hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span className="text-ink-line">|</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-ink-muted hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="mt-16 border-t border-ink-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 SJCE-STEP Hardware Prototyping Lab. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://sjcestep.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Main STEP Website
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
