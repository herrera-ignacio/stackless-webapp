import React, { useRef, useState, useEffect, Fragment } from 'react';
import { useInViewport } from 'react-in-viewport';
import './headerWithAnimation.scss';

interface HeaderWithAnimationProps {
  text: string;
  highlightIdx?: number;
}

const HeaderWithAnimation: React.FC<HeaderWithAnimationProps> = ({ text, highlightIdx = 0 }) => {
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
    const words = text.split('');
    return text.split(" ")
      .map((sentence, sentenceIdx) => sentence.split("")
      .map((char, i) => {
      ++time;
      return (
        <Fragment key={char + time}>
          <span
            className={`
              heading
              ${start && ` with-animation`}
              ${sentenceIdx % 2 !== 0 && ' colored'}
              ${highlightIdx === sentenceIdx && ' highlight-mobile'}
            `}
            
            style={{ animationDelay: `${time*100}ms` }}
          >
            {char}

          </span>
          {/* If last char, leave space for next word */}
          {i + 1 === sentence.length && (
            <span className='spacing' />
          )}
        </Fragment>
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
