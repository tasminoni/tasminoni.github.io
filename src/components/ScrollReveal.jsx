import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ as = 'div', delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
