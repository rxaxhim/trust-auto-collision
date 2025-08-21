import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="particles">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="particle opacity-40" />
      ))}
    </div>
  );
};

export default ParticleBackground;