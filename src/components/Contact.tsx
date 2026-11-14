import { useState } from 'react';
import { contact } from '../data';
import { SplitText } from './SplitText';
import { MagneticLink } from './MagneticLink';
import { useInView } from '../hooks/useInView';

export function Contact({ motion }: { motion: boolean }) {
  const [ref, seen] = useInView<HTMLHeadingElement>(0.3);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section className="block wrap" id="contact" aria-labelledby="contact-title">
      <h2 className="contact-title" id="contact-title" ref={ref}>
        <span className="line">
          <SplitText text="Let's build" play={seen} step={36} />
        </span>
        <span className="line">
          <SplitText text="something" play={seen} delay={380} step={36} />
        </span>
        <span className="line accent">
          <SplitText text="useful." play={seen} delay={760} step={50} />
        </span>
      </h2>
      <ul className="direct">
        <li>
          <a className="sweep" href={`mailto:${contact.email}`}>{contact.email}</a>
          <button className="copy" type="button" onClick={copy} aria-live="polite">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </li>
        <li>
          <a className="sweep" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
        </li>
      </ul>
      <ul className="social">
        <li>
          <MagneticLink href={contact.github} target="_blank" rel="noopener noreferrer" motion={motion}>GitHub</MagneticLink>
        </li>
        <li>
          <MagneticLink href={contact.facebook} target="_blank" rel="noopener noreferrer" motion={motion}>Facebook</MagneticLink>
        </li>
        <li>
          <MagneticLink href={contact.instagram} target="_blank" rel="noopener noreferrer" motion={motion}>Instagram</MagneticLink>
        </li>
      </ul>
    </section>
  );
}
