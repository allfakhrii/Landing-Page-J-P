import { useState } from 'react';
import { NAV_LINKS } from '../data';
import { buttonVariants } from './ui/button';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity lg:hidden"
          aria-hidden="true"
        />
      )}
      
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out bg-background/90 backdrop-blur-xl border text-foreground ${
            mobileMenuOpen
              ? 'w-full max-w-lg rounded-[28px] p-5 shadow-2xl border-border'
              : scrolled
                ? 'w-full max-w-5xl rounded-full py-2 px-3.5 sm:px-5 shadow-lg border-border'
                : 'w-full max-w-5xl rounded-full py-2.5 px-4 sm:px-6 border-transparent shadow-md bg-background/50'
          }`}
        >
          {!mobileMenuOpen ? (
            <div className="flex items-center justify-between w-full">
              <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-foreground">JP &amp; PARTNERS</span>
                  <span className="hidden xl:inline text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Consulting</span>
                </div>
              </a>
              
              <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1 border border-border">
                {NAV_LINKS.map((link) => (
                  <a key={link.name} href={link.href} className="text-xs tracking-wide font-medium text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <a href="#contact" className={buttonVariants({ size: "sm", className: "hidden sm:inline-flex rounded-full text-xs font-semibold shadow-sm" })}>
                  Mulai Konsultasi
                </a>
                
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-xs font-medium"
                >
                  <span>Menu</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div>
                    <span className="font-serif font-bold text-base tracking-wider text-foreground block leading-tight">JP &amp; PARTNERS</span>
                    <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium block">Business &amp; Management Consulting</span>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 text-foreground flex items-center justify-center transition-colors">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs font-medium transition-colors">
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-border space-y-2.5">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={buttonVariants({ className: "w-full rounded-xl" })}>
                  Mulai Konsultasi
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
