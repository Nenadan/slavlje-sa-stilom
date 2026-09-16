import { useRef, useState } from 'react';

const DURATION = 250;
const EASING = 'ease';

export function useAnimatedDetails() {
  const detailsRef = useRef(null);
  const animationRef = useRef(null);
  const rafRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function finish(details, opening) {
    details.open = opening;
    details.style.height = '';
    animationRef.current = null;
  }

  function grow(details) {
    details.style.height = `${details.offsetHeight}px`;
    details.open = true;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const startHeight = details.style.height;
      const endHeight = `${details.scrollHeight}px`;
      const animation = details.animate(
        { height: [startHeight, endHeight] },
        { duration: DURATION, easing: EASING }
      );
      animation.onfinish = () => finish(details, true);
      animationRef.current = animation;
    });
  }

  function shrink(details) {
    const startHeight = `${details.offsetHeight}px`;
    const summaryHeight = details.querySelector('summary').offsetHeight;
    const animation = details.animate(
      { height: [startHeight, `${summaryHeight}px`] },
      { duration: DURATION, easing: EASING }
    );
    animation.onfinish = () => finish(details, false);
    animationRef.current = animation;
  }

  function handleClick(event) {
    event.preventDefault();
    const details = detailsRef.current;
    if (!details) return;

    const opening = !details.open;
    setIsOpen(opening);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      details.open = opening;
      return;
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    animationRef.current?.cancel();

    if (opening) {
      grow(details);
    } else {
      shrink(details);
    }
  }

  return { detailsRef, isOpen, handleClick };
}
