export const cardHoverVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const iconHoverVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 12,
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
}

export const badgeHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}
