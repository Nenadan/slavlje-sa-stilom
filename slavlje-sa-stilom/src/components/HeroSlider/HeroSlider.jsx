import { useEffect, useRef, useState } from 'react';
import './HeroSlider.css';

const AUTOPLAY_DELAY = 3500;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function HeroSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = prefersReducedMotion();
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isPaused || reducedMotionRef.current) return undefined;

    const id = setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, [images.length, isPaused]);

  if (images.length === 0) return null;

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={index === activeIndex ? image.alt : ''}
          aria-hidden={index !== activeIndex}
          className={`hero-slider-image${index === activeIndex ? ' active' : ''}`}
        />
      ))}

      {images.length > 1 && (
        <div className="hero-slider-dots">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`hero-slider-dot${index === activeIndex ? ' active' : ''}`}
              aria-label={`Prikaži fotografiju ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroSlider;
