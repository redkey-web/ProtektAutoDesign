import { motion } from 'framer-motion';
import { useState } from 'react';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';

interface AnimatedLogoProps {
  onAnimationComplete?: () => void;
}

export default function AnimatedLogo({ onAnimationComplete }: AnimatedLogoProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    onAnimationComplete?.();
  };

  if (!isAnimating) {
    return null;
  }

  return (
    <motion.div
      className="fixed z-[100] pointer-events-none"
      style={{ originX: 0, originY: 0 }}
      initial={{
        top: '35%',
        left: '50%',
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        top: 16,
        left: 16,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 1.4,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onAnimationComplete={handleAnimationComplete}
      data-testid="animated-logo"
    >
      <motion.img
        src={logoImage}
        alt="Protekt Auto"
        className="drop-shadow-2xl"
        initial={{ 
          width: '28rem',
          opacity: 1 
        }}
        animate={{ 
          width: '12rem',
          opacity: 1 
        }}
        transition={{
          duration: 1.4,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </motion.div>
  );
}
