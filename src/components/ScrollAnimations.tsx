'use client';

import { motion, useInView, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Multiplier for parallax effect (default 0.5)
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Fade up animation
export function FadeUp({ children, className = '', delay = 0, duration = 0.6, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in animation
export function FadeIn({ children, className = '', delay = 0, duration = 0.6, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left
export function SlideInLeft({ children, className = '', delay = 0, duration = 0.6, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from right
export function SlideInRight({ children, className = '', delay = 0, duration = 0.6, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale up animation
export function ScaleUp({ children, className = '', delay = 0, duration = 0.6, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item (use inside StaggerContainer)
export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Reveal with blur effect
export function BlurReveal({ children, className = '', delay = 0, duration = 0.8, once = true }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll-linked animation - moves with scroll speed
export function Parallax({ children, className = '', speed = 0.5, direction = 'up' }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Calculate movement based on direction and speed
  const range = 100 * speed;
  const yUp = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-range, range]);

  const y = useSpring(direction === 'up' ? yUp : direction === 'down' ? yDown : 0, springConfig);
  const x = useSpring(direction === 'left' ? xLeft : direction === 'right' ? xRight : 0, springConfig);

  return (
    <motion.div ref={ref} style={{ y, x }} className={className}>
      {children}
    </motion.div>
  );
}

// Parallax text that slides in based on scroll position
export function ParallaxSlideIn({
  children,
  className = '',
  direction = 'left',
  speed = 1
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const springConfig = { stiffness: 80, damping: 20 };

  // Slide from off-screen to position based on scroll
  const range = 150 * speed;
  const xFromLeft = useTransform(scrollYProgress, [0, 1], [-range, 0]);
  const xFromRight = useTransform(scrollYProgress, [0, 1], [range, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const x = useSpring(
    direction === 'left' ? xFromLeft : direction === 'right' ? xFromRight : 0,
    springConfig
  );
  const smoothOpacity = useSpring(opacity, springConfig);

  return (
    <motion.div ref={ref} style={{ x, opacity: smoothOpacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Parallax fade that responds to scroll speed
export function ParallaxFade({
  children,
  className = '',
  speed = 0.5
}: Omit<ParallaxProps, 'direction'>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const springConfig = { stiffness: 100, damping: 25 };

  const yRange = 50 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [yRange, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.3, 1]);

  const smoothY = useSpring(y, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  return (
    <motion.div ref={ref} style={{ y: smoothY, opacity: smoothOpacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Scale on scroll - grows as you scroll into view
export function ParallaxScale({
  children,
  className = '',
  speed = 0.3
}: Omit<ParallaxProps, 'direction'>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const springConfig = { stiffness: 100, damping: 30 };

  const scaleStart = 1 - (0.2 * speed);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  const smoothScale = useSpring(scale, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  return (
    <motion.div ref={ref} style={{ scale: smoothScale, opacity: smoothOpacity }} className={className}>
      {children}
    </motion.div>
  );
}
