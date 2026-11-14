import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { SplitText } from './SplitText';
import { MagneticLink } from './MagneticLink';
import { usePointerFollow } from '../hooks/usePointerFollow';

interface HeroProps {
  ready: boolean;
  motion: boolean;
}

function ReactAtom() {
  return (
    <svg viewBox="-12 -12 24 24" width="22" height="22" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <ellipse rx="10" ry="4" />
        <ellipse rx="10" ry="4" transform="rotate(60)" />
        <ellipse rx="10" ry="4" transform="rotate(120)" />
      </g>
      <circle r="1.8" fill="currentColor" />
    </svg>
  );
}

const chip = (angle: number): CSSProperties => ({ '--a': `${angle}deg` }) as CSSProperties;

export function Hero({ ready, motion }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  usePointerFollow(ref, motion);

  return (
    <section className={`hero wrap ${ready ? 'is-ready' : ''}`} id="top" ref={ref} aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow rise" style={{ '--d': '0ms' } as CSSProperties}>
          Computer engineering student
        </p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-line">
            <SplitText text="Tarikul" play={ready} delay={120} step={55} />
          </span>
          <span className="hero-line">
            <SplitText text="Islam" play={ready} delay={500} step={55} />
          </span>
        </h1>
        <p className="lede rise" style={{ '--d': '900ms' } as CSSProperties}>
          I build fast, responsive websites with React, TypeScript and Next.js.
        </p>
        <div className="actions rise" style={{ '--d': '1050ms' } as CSSProperties}>
          <MagneticLink className="btn" href="#work" motion={motion}>
            See my work
          </MagneticLink>
          <MagneticLink className="textlink" href="#contact" motion={motion}>
            Get in touch
          </MagneticLink>
        </div>
      </div>

      <div className="orb-wrap" aria-hidden="true">
        <div className="orb">
          <div className="orb-glow" />
          <div className="orb-core" />
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="orbit orbit-1">
            <div className="chip" style={chip(0)}><span>&lt;/&gt;</span></div>
            <div className="chip" style={chip(120)}><span>{'{ }'}</span></div>
            <div className="chip" style={chip(240)}><span>TS</span></div>
          </div>
          <div className="orbit orbit-2">
            <div className="chip chip-sm" style={chip(60)}><span><ReactAtom /></span></div>
            <div className="chip chip-sm" style={chip(240)}><span>JS</span></div>
          </div>
        </div>
      </div>

      <a className="scroll-cue rise" style={{ '--d': '1400ms' } as CSSProperties} href="#work" aria-label="Scroll to my work">
        <span />
      </a>
    </section>
  );
}
