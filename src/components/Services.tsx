import { SERVICES_DATA } from '../data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">LAYANAN KAMI</Badge>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Area Praktik & Keahlian</h2>
          <p className="text-muted-foreground">Solusi manajemen menyeluruh yang dirancang untuk menyelaraskan setiap elemen penting dalam organisasi Anda.</p>
        </div>
        
        <div className="flex md:flex-wrap md:justify-center gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {SERVICES_DATA.map((service) => (
            <Card 
              key={service.id} 
              className="w-[85%] max-w-[320px] flex-shrink-0 snap-center md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] md:flex-shrink md:flex-grow-0 group md:hover:border-primary/50 md:hover:bg-secondary/20 transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-2 bg-background overflow-hidden relative"
            >
              {/* Decorative accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:group-hover:scale-110 md:group-hover:bg-primary/20 md:group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </div>
                <Badge variant="secondary" className="w-fit mb-2 text-[10px] md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors">{service.category}</Badge>
                <CardTitle className="text-xl font-bold md:group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed mt-2">{service.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground md:group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
