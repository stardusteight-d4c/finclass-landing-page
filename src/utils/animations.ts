export const headingAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.25 },
  transition: {
    duration: 1,
  },
  variants: {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
}

export const bannerImageAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.25 },
  transition: {
    duration: 1,
  },
  variants: {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
}

export const mentorsHeadingAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  },
}
