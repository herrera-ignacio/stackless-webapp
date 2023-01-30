import React, { useRef, useState, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';
import CountUp from 'react-countup';
import './counter.scss';

interface CounterProps {
  value: number;
  duration: number; // s
  delay?: number; // ms
  symbol?: string;
  description?: string;
}

const defaultProps = {
  value: 0,
  duration: 5,
  delay: 1000,
}

const Counter: React.FC<CounterProps> = ({ value, symbol, delay, duration, description } = defaultProps) => {
  const [start, setStart] = useState(false);
  // const [completed, setCompleted] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(ref);

  useEffect(() => {
    if (inViewport && !start) {
      // setIsVisible(inViewport);
      const timeout = setTimeout(() => {
        setStart(true);
      }, delay ?? defaultProps.delay)

      return () => clearTimeout(timeout);
    }
  });

  return (
    <div id='counter' ref={ref}>
      <div>
        <CountUp className='value' start={0} end={start ? value : 0} duration={duration} />
        <span className='symbol'>{symbol}</span>
      </div>
      <div id='description'>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default Counter;
