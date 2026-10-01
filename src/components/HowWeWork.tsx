import { HOW_WE_WORK_STEPS } from '../data';
import { Badge } from './ui/badge';
import AnimatedSection from './AnimatedSection';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 border-t border-border bg-transparent">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <div className="sticky top-32 text-center lg:text-left">
              <Badge variant="outline" className="mb-4">METODOLOGI</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Cara Kerja Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pendekatan sistematis 5D (Discover, Diagnose, Design, Deliver, Develop) memastikan setiap rekomendasi berbasis data dan dapat dieksekusi dengan terukur.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {HOW_WE_WORK_STEPS.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-default">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-125 transition-all duration-300 z-10">
                    <span className="text-xs font-bold">{step.step}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-secondary/50 border border-border group-hover:border-primary/40 group-hover:bg-secondary/80 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 md:group-odd:group-hover:-translate-x-2 md:group-even:group-hover:translate-x-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-bold tracking-wider text-sm">{step.title}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.action}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
