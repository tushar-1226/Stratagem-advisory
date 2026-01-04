import { Variants } from "framer-motion";

/**
 * Common animation variants that can be reused across components and pages
 */

// Fade in animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Fade in from top
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Stagger children animation (for lists)
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item animation (used with staggerContainer)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Mobile menu slide down animation
export const mobileMenuSlide: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// ============================================
// SUBTLE QUICK ANIMATIONS (0.1s) - For components that need minimal animation
// ============================================

// Subtle fade in (very quick, minimal)
export const subtleFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

// Subtle fade in from top (very small movement)
export const subtleFadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

// Subtle fade in from bottom (very small movement)
export const subtleFadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

// Subtle stagger container (quick stagger)
export const subtleStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

// Subtle stagger item (quick, minimal movement)
export const subtleStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

// Subtle mobile menu slide (quick)
export const subtleMobileMenuSlide: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

// Subtle dropdown menu animation (quick)
export const subtleDropdown: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

// Default animation props for common use
export const defaultAnimationProps = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
};
