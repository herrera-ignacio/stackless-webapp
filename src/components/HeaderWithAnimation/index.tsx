import React, { useRef, useState, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';
import './headerWithAnimation.scss';

interface HeaderWithAnimationProps {
  text: string;
}

const HeaderWithAnimation: React.FC<HeaderWithAnimationProps> = ({ text }) => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref);

  useEffect(() => {
    if (inViewport && !start) {
      // setIsVisible(inViewport);
      const timeout = setTimeout(() => {
        setStart(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  });

  const getText = () => {
    let time = 0;
    return text.split(" ")
      .map((sentence, sentenceIdx) => sentence.split("")
      .map((char, i) => {
      ++time;
      return (
        <span
          className={`heading ${start && `with-animation`} ${sentenceIdx % 2 !== 0 && 'colored'}`}
          key={char + time}
          style={{ animationDelay: `${time*100}ms` }}
        >
          {char}
          {/* If last char, leave space for next word */}
          {i + 1 === sentence.length && (
            <span style={{ 'marginLeft': '0.5rem' }} />
          )}
        </span>
      );
    }));
  }

  return (
    <h2 className='with-animation' ref={ref}>
      {getText()}
    </h2>
  );
}

export default HeaderWithAnimation;
