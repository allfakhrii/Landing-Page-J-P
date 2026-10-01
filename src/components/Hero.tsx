import { buttonVariants } from './ui/button';
import { Badge } from './ui/badge';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center border-b border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-12">
        <Badge variant="secondary" className="mb-6 uppercase tracking-widest text-[10px] font-bold animate-in fade-in zoom-in duration-1000 fill-mode-both">
          Konsultan Bisnis & Manajemen
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          From Insight to <br className="hidden sm:block" />
          <span className="text-primary italic inline-block hover:scale-105 transition-transform duration-500 cursor-default">Sustainable Growth</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          Kami memadukan strategi, tata kelola, dan eksekusi lintas fungsi untuk membantu bisnis Anda tumbuh lebih kuat, efisien, dan berdaya saing jangka panjang.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
          <a href="#contact" className={buttonVariants({ size: "lg", className: "rounded-full font-semibold px-8 h-12 w-full sm:w-auto hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1" })}>
            Mulai Konsultasi
          </a>
          <a href="#services" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full font-semibold px-8 h-12 w-full sm:w-auto transition-all hover:-translate-y-1" })}>
            Pelajari Layanan
          </a>
          <a href="#" download className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full font-semibold px-8 h-12 w-full sm:w-auto flex items-center gap-2 transition-all hover:-translate-y-1 group" })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 group-hover:text-primary transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download PPT
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce opacity-70">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Scroll</span>
          <svg className="w-5 h-5 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
