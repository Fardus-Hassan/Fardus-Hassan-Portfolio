/* eslint-disable react/prop-types -- motion wrappers; children/className/as are conventional */
/* eslint-disable react-refresh/only-export-components -- EASE_SECTION & stagger helpers used by sections */
import { motion, useReducedMotion } from "framer-motion";

export const EASE_SECTION = [0.22, 1, 0.36, 1];

const motionTags = {
  div: motion.div,
  section: motion.section,
  footer: motion.footer,
  header: motion.header,
  article: motion.article,
};

/** Scroll-in (or mount) fade + slide — respects prefers-reduced-motion */
export function SectionReveal({
  as = "div",
  when = "inView",
  delay = 0,
  className,
  children,
  id,
  viewportAmount = 0.14,
  y = 32,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Motion = motionTags[as] ?? motion.div;
  const done = { opacity: 1, y: 0 };
  const from = reduce ? done : { opacity: 0, y };

  const transition = {
    duration: reduce ? 0 : 0.58,
    delay: reduce ? 0 : delay,
    ease: EASE_SECTION,
  };

  if (when === "mount") {
    return (
      <Motion
        id={id}
        className={className}
        initial={from}
        animate={done}
        transition={transition}
        {...rest}
      >
        {children}
      </Motion>
    );
  }

  return (
    <Motion
      id={id}
      className={className}
      initial={from}
      whileInView={done}
      viewport={{ once: true, amount: viewportAmount, margin: "0px 0px -12% 0px" }}
      transition={transition}
      {...rest}
    >
      {children}
    </Motion>
  );
}

/** Parent variants: stagger children */
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.54, ease: EASE_SECTION },
  },
};

/** Stagger variants that collapse to no motion when reduced-motion is on */
export function useStaggerVariants() {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      container: {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0, delayChildren: 0 },
        },
      },
      item: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      },
    };
  }
  return { container: staggerContainer, item: staggerItem };
}

/** In-view row (works well inside overflow scroll areas) */
export function RevealBlock({
  as = "section",
  className,
  children,
  amount = 0.22,
  y = 22,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Motion = motionTags[as] ?? motion.section;
  const done = { opacity: 1, y: 0 };
  const from = reduce ? done : { opacity: 0, y };

  return (
    <Motion
      className={className}
      initial={from}
      whileInView={done}
      viewport={{ once: true, amount }}
      transition={{ duration: reduce ? 0 : 0.52, ease: EASE_SECTION }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
