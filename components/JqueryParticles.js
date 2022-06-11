import React, { useEffect } from 'react';

const JQueryParticles = () => {
  useEffect(() => {
    window.jQuery = require('../public/jquery-latest.min');
    window.ParticleGround = require('../public/jquery.particleground.js');

    window.jQuery('#particles').particleground({
      dotColor: '#667a98',
      lineColor: '#f0f0f0',
      particleRadius: 6,
      lineWidth: 0.1,
      proximity: 160,
      parallax: true,
      parallaxMultiplier: 8,
      density: 7500,
      maxSpeedX: 0.2,
      maxSpeedY: 0.2
    });
  }, []);

  return <div className={'md:absolute w-full h-full'} id={'particles'}></div>;
};

export default JQueryParticles;
