import React, { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import { Particles as TsParticles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particleOptions from './options';

const Particles = ({ id }: { id: string }) => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <TsParticles
      id={id}
      className='tsparticles'
      init={particlesInit}
      options={particleOptions as any}
    />
  );
};

export default Particles;
