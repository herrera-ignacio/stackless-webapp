import React, { useState, useEffect } from 'react';
import Animation from '@components/Animation';
import baffle from 'baffle';
import './PageRevealer.scss';

const PageRevealer = () => {
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [revealAnimation, setRevealAnimation] = useState(false);
  const delay = 1000;

  useEffect(() => {
    const target = baffle('h1#baffle-text')
    target.set({
      characters: "█1010101010",
      speed: 75
    });
    target.start();
    target.reveal(delay, delay);

    const timer = setTimeout(() => {
      setRevealAnimation(true);
      setTimeout(() => {
        setTransparent(true);
      }, 400);
      setTimeout(() => {
        setHidden(true);
      }, 900);
    }, delay * 2);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div
      id='page-revealer-container'
      className={`
      ${hidden ? 'hidden' : ''}
      ${transparent ? 'transparent' : ''}
      `}
    >
      <Animation animation='fadeIn' delay={200}>
        <h1 id='baffle-text'>Stackless</h1>
      </Animation>
      <div
        id='revealer-animation'
        className={revealAnimation ? 'show' : ''}
      />
    </div>
  );
}

export default PageRevealer;
