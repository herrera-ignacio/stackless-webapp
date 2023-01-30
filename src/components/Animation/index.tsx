import React, { useRef, useState, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';
import 'animate.css';

/**
 * animation: Animate's animation name
 */
interface AnimationProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number; // ms
}

const defaultProps = {
  children: null,
  animation: 'fadeInLeft',
  delay: 1000,
}

const Animation: React.FC<AnimationProps> = ({ children, animation, delay } = defaultProps) => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref);
  
  useEffect(() => {
    if (inViewport && !start) {
      const timeout = setTimeout(() => {
        setStart(true);
      }, delay ?? defaultProps.delay);

      return () => clearTimeout(timeout);
    }
  });

  return (
    <div
      className={start ? `animate__animated animate__${animation ?? defaultProps.animation}`: ''}
      style={{ opacity: start ? 1 : 0, height: 'auto' }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Animation;
