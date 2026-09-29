import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}

export default function AnimatedSection({ 
  children, 
  className,
  animation = "animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out",
  delay = "" 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        !isVisible ? "opacity-0" : animation,
        isVisible ? delay : "",
        className
      )}
    >
      {children}
    </div>
  );
}
