import { useState, useMemo } from 'react';
import { PRICING_DATA } from '../data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { buttonVariants } from './ui/button';
import AnimatedSection from './AnimatedSection';

export default function Pricing() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'flagship', label: 'Paket Utama' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'operations', label: 'Operations' },
    { id: 'hr', label: 'HR' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'finance', label: 'Finance' },
    { id: 'data', label: 'Data & IT' },
  ];

  const filteredData = useMemo(() => {
    if (filter === 'all') return PRICING_DATA;
    return PRICING_DATA.filter(item => item.areaKey === filter);
  }, [filter]);

  return (
    <section id="pricing" className="py-24 border-t border-border bg-transparent">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">INVESTASI</Badge>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Estimasi Investasi Fleksibel</h2>
          <p className="text-muted-foreground">Kami percaya pada transparansi. Berikut adalah panduan awal investasi untuk layanan kami, yang dapat disesuaikan dengan skala dan kompleksitas bisnis Anda.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                filter === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex md:flex-wrap md:justify-center gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {filteredData.map((pkg, idx) => (
            <div key={idx} className={`w-[85%] max-w-[320px] flex-shrink-0 snap-center md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] md:flex-shrink md:flex-grow-0 flex flex-col relative group`}>
              {/* Glowing background for highlighted packages */}
              {pkg.highlight && (
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-lg opacity-50 md:group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              )}
              
              <Card className={`relative h-full flex flex-col transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl bg-background ${pkg.highlight ? 'border-primary ring-1 ring-primary/30 shadow-md' : 'md:hover:border-primary/50'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={pkg.highlight ? 'default' : 'secondary'} className="text-[10px]">{pkg.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-1">{pkg.title}</CardTitle>
                  <div className="text-sm text-primary font-bold mt-2">{pkg.price}</div>
                  <CardDescription className="mt-4">{pkg.scope}</CardDescription>
                </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-border/50">
                <a 
                  href={`#contact?service=${encodeURIComponent(pkg.title)}`} 
                  onClick={() => {
                    // Update state via CustomEvent so it's guaranteed to run even if hash doesn't change
                    window.dispatchEvent(new CustomEvent('packageSelected', { detail: pkg.title }));
                    // Explicitly scroll down
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className={buttonVariants({ variant: pkg.highlight ? 'default' : 'outline', className: "w-full" })}
                >
                  Pilih Paket Ini
                </a>
              </CardFooter>
            </Card>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
