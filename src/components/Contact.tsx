import { useState, useEffect, type ChangeEvent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#contact?service=')) {
        const serviceParam = hash.split('?service=')[1];
        if (serviceParam) {
          const decoded = decodeURIComponent(serviceParam);
          setFormData(prev => ({ ...prev, service: decoded }));
          
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };
    
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData(prev => ({ ...prev, service: customEvent.detail }));
      }
    };
    
    // Check on mount
    handleHashChange();
    
    // Listen for future changes
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('packageSelected', handleCustomSelect);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('packageSelected', handleCustomSelect);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getWhatsAppLink = () => {
    const phone = "6281919011011";
    const text = encodeURIComponent(
      `Halo JP & Partners, perkenalkan saya ${formData.name || "[Nama]"}${formData.company ? ` dari ${formData.company}` : ""}. Saya ingin berdiskusi mengenai layanan ${formData.service || "Konsultasi Bisnis"}.\n\nCatatan kebutuhan: ${formData.message || "-"}`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Siap Bertransformasi Bersama Kami?</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Diskusikan tantangan bisnis Anda bersama tim konsultan kami. Kami siap membantu Anda merancang peta jalan menuju efisiensi, pertumbuhan, dan keberlanjutan bisnis.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Telepon / WhatsApp</h4>
                  <p className="text-muted-foreground mt-1">0819 1901 1011</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">consult@jpandco.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Kantor Operasional</h4>
                  <p className="text-muted-foreground mt-1">Perumahan Graha Timur, Purwokerto Timur, Kabupaten Banyumas, Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Mulai Diskusi Awal</CardTitle>
              <CardDescription>Isi formulir singkat di bawah ini dan kami akan segera menghubungi Anda kembali.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nama Lengkap *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Budi Santoso" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Perusahaan / Bisnis</label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder="PT Sukses Makmur" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp / Telepon *</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="0812xxxxxx" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Minat Layanan</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">-- Pilih Layanan Utama --</option>
                      <option value="Business Strategy">Business Strategy</option>
                      <option value="Finance & Performance">Finance & Performance</option>
                      <option value="People & Organization">People & Organization (HR)</option>
                      <option value="Marketing & Growth">Marketing & Growth</option>
                      <option value="Operations & Process">Operations & Process</option>
                      <option value="Technology & Digital">Technology & Digital</option>
                      {formData.service && !["Business Strategy", "Finance & Performance", "People & Organization", "Marketing & Growth", "Operations & Process", "Technology & Digital", "Lainnya"].includes(formData.service) && (
                        <option value={formData.service}>{formData.service}</option>
                      )}
                      <option value="Lainnya">Lainnya / Ingin Konsultasi Dulu</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ceritakan Tantangan Anda *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Kami sedang mengalami kendala dalam..." className="min-h-[120px] resize-none" />
                </div>
                
                <div className="pt-2">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={buttonVariants({ className: "w-full h-12 text-base font-bold" })}>
                    Kirim Pesan via WhatsApp
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </section>
  );
}
