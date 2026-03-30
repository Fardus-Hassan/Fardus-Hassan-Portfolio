/* eslint-disable react/prop-types, react-refresh/only-export-components */
/**
 * Inert layout wrappers — no scroll/mount animations (keeps same API for imports).
 */
export const EASE_SECTION = [0.22, 1, 0.36, 1];

export const staggerContainer = {};
export const staggerItem = {};

export function useStaggerVariants() {
  return {
    container: staggerContainer,
    item: staggerItem,
    rootClass: "",
    itemClass: "",
  };
}

export function SectionReveal({
  as: Tag = "div",
  className = "",
  children,
  id,
  ...rest
}) {
  const { delay, when, viewportAmount, y, ...forward } = rest;
  void delay;
  void when;
  void viewportAmount;
  void y;
  return (
    <Tag id={id} className={className} {...forward}>
      {children}
    </Tag>
  );
}

export function RevealBlock({
  as: Tag = "section",
  className = "",
  children,
  ...rest
}) {
  const { amount, y, ...forward } = rest;
  void amount;
  void y;
  return (
    <Tag className={className} {...forward}>
      {children}
    </Tag>
  );
}
