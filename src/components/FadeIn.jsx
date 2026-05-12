'use client';

/**
 * FadeIn — Luxury cinematic reveal component
 *
 * A reusable Framer Motion wrapper that applies a restrained, editorial
 * fade-up animation when elements enter the viewport.
 *
 * Design Philosophy
 * ─────────────────
 * • Opacity + subtle Y translate = weight without drama
 * • Optional blur fade = depth, not gimmick — use sparingly
 * • Custom cubic-bezier easing = deceleration that feels intentional
 * • Stagger via `delay` + wrapping <FadeInGroup> = sequential reveals
 * • `once: true` = each element animates in once, then stays — no loop jitter
 *
 * Usage
 * ─────
 * // Basic
 * <FadeIn>
 *   <h2>Our Philosophy</h2>
 * </FadeIn>
 *
 * // With blur, custom delay, and custom Y distance
 * <FadeIn blur delay={0.2} y={40}>
 *   <p>Crafted with precision.</p>
 * </FadeIn>
 *
 * // Staggered group
 * <FadeInGroup stagger={0.15}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FadeInGroup>
 */

import { motion } from 'framer-motion';
import { Children } from 'react';

// ─── Easing ─────────────────────────────────────────────────────────────────
// Custom cubic-bezier: slow start → smooth → gentle arrival
// Feels intentional and editorial — not mechanical.
const LUXURY_EASE = [0.22, 1, 0.36, 1];

// ─── Default Config ──────────────────────────────────────────────────────────
const DEFAULTS = {
  y: 28,            // subtle upward travel (px) — not dramatic
  duration: 0.9,    // long enough to feel cinematic, short enough to feel alive
  blur: false,      // opt-in: blurred start → sharp arrival
  blurAmount: 6,    // px — restrained, editorial depth cue
  delay: 0,         // stagger offset in seconds
  amount: 0.15,     // viewport threshold before triggering (15% in view)
  once: true,       // animate once on entry — no re-trigger on scroll back
};

// ─── FadeIn ──────────────────────────────────────────────────────────────────
/**
 * @param {object}   props
 * @param {React.ReactNode} props.children  - Content to animate
 * @param {number}   [props.y=28]           - Initial Y offset in px
 * @param {number}   [props.duration=0.9]   - Animation duration in seconds
 * @param {boolean}  [props.blur=false]     - Enable blur-to-sharp transition
 * @param {number}   [props.blurAmount=6]   - Blur strength in px (requires blur=true)
 * @param {number}   [props.delay=0]        - Delay before animation starts (seconds)
 * @param {number}   [props.amount=0.15]    - Viewport amount (0–1) to trigger animation
 * @param {boolean}  [props.once=true]      - Trigger only once
 * @param {string}   [props.className]      - Additional Tailwind / CSS classes
 * @param {string}   [props.as='div']       - HTML element to render as
 */
export default function FadeIn({
  children,
  y = DEFAULTS.y,
  duration = DEFAULTS.duration,
  blur = DEFAULTS.blur,
  blurAmount = DEFAULTS.blurAmount,
  delay = DEFAULTS.delay,
  amount = DEFAULTS.amount,
  once = DEFAULTS.once,
  className = '',
  as = 'div',
}) {
  const hidden = {
    opacity: 0,
    y,
    ...(blur && { filter: `blur(${blurAmount}px)` }),
  };

  const visible = {
    opacity: 1,
    y: 0,
    ...(blur && { filter: 'blur(0px)' }),
  };

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration,
            delay,
            ease: LUXURY_EASE,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

// ─── FadeInGroup ─────────────────────────────────────────────────────────────
/**
 * Wraps multiple children and staggers their FadeIn animations automatically.
 * Each direct child is wrapped in a FadeIn with an incremental delay.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children    - Children to stagger
 * @param {number}  [props.stagger=0.12]      - Time between each child's reveal (seconds)
 * @param {number}  [props.initialDelay=0]    - Base delay before the first item (seconds)
 * @param {object}  [props.fadeProps]         - Any FadeIn props to apply to all children
 * @param {string}  [props.className]         - Classes on the wrapper element
 *
 * @example
 * <FadeInGroup stagger={0.15} className="flex flex-col gap-6">
 *   <ServiceCard />
 *   <ServiceCard />
 *   <ServiceCard />
 * </FadeInGroup>
 */
export function FadeInGroup({
  children,
  stagger = 0.12,
  initialDelay = 0,
  fadeProps = {},
  className = '',
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) =>
        child ? (
          <FadeIn key={i} delay={initialDelay + i * stagger} {...fadeProps}>
            {child}
          </FadeIn>
        ) : null,
      )}
    </div>
  );
}

// ─── FadeInText ──────────────────────────────────────────────────────────────
/**
 * Specialised variant for headings and editorial text blocks.
 * Uses a slightly longer duration and a stronger Y to imply weight.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.delay=0]
 * @param {string}  [props.className]
 * @param {string}  [props.as='div']
 */
export function FadeInText({ children, delay = 0, className = '', as = 'div' }) {
  return (
    <FadeIn
      y={20}
      duration={1.0}
      blur
      blurAmount={4}
      delay={delay}
      className={className}
      as={as}
    >
      {children}
    </FadeIn>
  );
}
