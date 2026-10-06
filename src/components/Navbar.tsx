import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { buttonVariants } from './ui/button';
import logo from '../assets/logo.png';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          // If multiple, pick the one closest to the top
          setActiveSection(intersecting[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out text-foreground border ${
            scrolled
              ? 'w-full max-w-4xl rounded-full py-2 px-3.5 sm:px-5 shadow-lg border-border/60 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-[24px] backdrop-saturate-[1.8]'
              : 'w-full max-w-4xl rounded-full py-2.5 px-4 sm:px-6 border-border/40 shadow-md bg-white/75 dark:bg-neutral-950/75 backdrop-blur-[20px] backdrop-saturate-[1.8]'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <a href="#" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-1">
              <img src={logo} alt="JP & PARTNERS Logo" className="h-8 w-auto sm:h-9 object-contain" />
              <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-foreground">JP &amp; Co.</span>
            </a>
            
            <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1 border border-border">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`text-xs tracking-wide font-medium px-3 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive 
                        ? 'bg-foreground text-background shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a href="#contact" className={buttonVariants({ size: "sm", className: "hidden sm:inline-flex rounded-full text-xs font-semibold shadow-sm" })}>
                Mulai Konsultasi
              </a>
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex items-center justify-center p-1.5 text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="relative mt-3 mx-3 p-5 rounded-[28px] shadow-2xl border border-border/50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-[24px] backdrop-saturate-[1.8] animate-in slide-in-from-top-8 fade-in duration-300 ease-out">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="JP & PARTNERS Logo" className="h-10 w-auto object-contain" />
                <span className="font-serif font-bold text-base tracking-wider text-foreground">JP &amp; Co.</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl text-xs font-medium transition-all duration-300 ease-out ${
                      isActive
                        ? 'bg-foreground text-background shadow-sm'
                        : 'bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <span className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both" style={{ animationDelay: `${idx * 50 + 100}ms` }}>{link.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="pt-4 mt-4 border-t border-border animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: "300ms" }}>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={buttonVariants({ className: "w-full rounded-xl py-6" })}>
                Mulai Konsultasi
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

