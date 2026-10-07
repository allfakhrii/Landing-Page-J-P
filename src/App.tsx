import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans flex flex-col relative ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Dynamic Background Layout */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Animated Glowing Blobs */}
          <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/5 blur-[120px] animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/5 blur-[100px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-primary/5 blur-[140px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <Navbar scrolled={scrolled} />
          <main className="flex-1">
            <Hero />
            <HowWeWork />
            <Team />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

