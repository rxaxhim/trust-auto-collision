import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'fadeInUp';
  delay?: number;
  className?: string;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  duration = 800
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const animationClasses = {
    fadeIn: 'opacity-0 transition-opacity',
    slideUp: 'opacity-0 translate-y-8 transition-all',
    slideLeft: 'opacity-0 translate-x-8 transition-all',
    slideRight: 'opacity-0 -translate-x-8 transition-all',
    scaleIn: 'opacity-0 scale-95 transition-all',
    fadeInUp: 'opacity-0 translate-y-6 transition-all'
  };

  const activeClasses = {
    fadeIn: 'opacity-100',
    slideUp: 'opacity-100 translate-y-0',
    slideLeft: 'opacity-100 translate-x-0',
    slideRight: 'opacity-100 translate-x-0',
    scaleIn: 'opacity-100 scale-100',
    fadeInUp: 'opacity-100 translate-y-0'
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isInView ? activeClasses[animation] : '',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;