import React, { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import { Particles as TsParticles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <TsParticles
      className='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "fullScreen": { enable: false, zIndex: 0 },
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 2000
            }
          },
          "color": {
            "value": ["#03afaf","#04e5e5"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#fff"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.5,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8.017060304327615,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 12.181158184520175,
              "size_min": 0.1,
              "sync": true
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.5,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
      }}
    />
  );
};

export default Particles;
