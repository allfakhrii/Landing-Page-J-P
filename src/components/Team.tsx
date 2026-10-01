import { useState, useEffect, useRef } from 'react';
import { TEAM_MEMBERS } from '../data';
import { Badge } from './ui/badge';
import AnimatedSection from './AnimatedSection';

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      let nextScroll = scrollLeft - clientWidth;
      if (scrollLeft <= 5) {
        nextScroll = maxScroll;
      }
      scrollRef.current.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      let nextScroll = scrollLeft + clientWidth;
      if (scrollLeft >= maxScroll - 5) {
        nextScroll = 0;
      }
      scrollRef.current.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      // Don't auto-scroll on desktop (where it's a grid)
      if (window.innerWidth >= 1024) return;
      scrollNext();
    }, 3500); // Slide every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="team" className="py-24 bg-secondary/30 border-t border-border overflow-hidden">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">TIM KAMI</Badge>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Konsultan Ahli & Spesialis</h2>
          <p className="text-muted-foreground">Kombinasi pengalaman lintas sektor untuk memberikan perspektif yang kaya dan solusi yang praktis bagi bisnis Anda.</p>
        </div>
        
        <div 
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[85vw] sm:w-[320px] lg:w-auto first:ml-0 last:mr-0 lg:first:ml-0 lg:last:mr-0"
              >
                <div className="h-full flex flex-col text-center px-4 sm:px-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-background relative overflow-hidden flex items-center justify-center shadow-sm border-[4px] border-background ring-1 ring-border/50">
                      {/* Avatar Image (with initials fallback) */}
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-full h-full object-cover z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif font-bold text-muted-foreground/30">
                        {member.initials}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-serif mb-1.5">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold">{member.role}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Mobile & Tablet Only) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-[85px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-all z-10 lg:hidden"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-[85px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-all z-10 lg:hidden"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}
