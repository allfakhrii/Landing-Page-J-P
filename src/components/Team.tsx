import { TEAM_MEMBERS } from '../data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import AnimatedSection from './AnimatedSection';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/30 border-t border-border">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">TIM KAMI</Badge>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Konsultan Ahli & Spesialis</h2>
          <p className="text-muted-foreground">Kombinasi pengalaman lintas sektor untuk memberikan perspektif yang kaya dan solusi yang praktis bagi bisnis Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <Card key={idx} className="group bg-background overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-end justify-center">
                {/* Fallback avatar if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif font-bold text-muted-foreground/20">
                  {member.initials}
                </div>
              </div>
              <CardHeader className="relative z-10 pt-6">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium mt-1">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
