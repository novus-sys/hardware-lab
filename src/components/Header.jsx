import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ScrambledText from './ScrambledText'

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Lab & Capabilities', path: '/lab' },
  { name: 'Programs & Access', path: '/programs' },
  { name: 'Projects & Impact', path: '/projects' },
  { name: 'About & Contact', path: '/about' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        
        {/* Logo and Lab Sub-brand */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer" aria-label="Hardware Lab Home">
          <img
            src="/assets/sjce-step-logo.png"
            alt="SJCE-STEP"
            width="180"
            height="90"
            className="w-24 md:w-32 object-contain"
          />
          <div className="h-6 w-[1px] bg-border hidden sm:block"></div>
          <span className="hidden sm:block font-mono text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase leading-none">
            Hardware Prototyping Lab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex ml-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1.5 eyebrow text-xs transition-colors hover:text-primary group cursor-pointer ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <ScrambledText text={item.name} />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-border"></span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-300 ease-out origin-right group-hover:origin-left group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/about#contact"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white tracking-wider uppercase font-mono transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
          >
            Start Prototyping
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-5 py-4 space-y-3 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block eyebrow text-xs py-2 transition-colors hover:text-primary ${
                  isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                <ScrambledText text={item.name} />
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border">
            <Link
              to="/about#contact"
              className="block text-center rounded-lg bg-accent px-5 py-3 text-xs font-semibold text-white tracking-wider uppercase font-mono transition-all duration-300 hover:bg-orange-600"
            >
              Start Prototyping
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
