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
        
        <div className="flex flex-wrap justify-center gap-6">
          {SERVICES_DATA.map((service) => (
            <Card key={service.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-grow-0 group hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </div>
                <Badge variant="secondary" className="w-fit mb-2 text-[10px]">{service.category}</Badge>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed mt-2">{service.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
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
