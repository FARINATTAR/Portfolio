import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const SpaceBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Add Stars for the space effect */}
      <Stars 
        radius={100}      // Radius of the star field
        depth={50}        // Depth of the star field
        count={5000}      // Number of stars
        factor={4}        // Size factor of stars
        saturation={0.5}  // Color saturation of stars
        fade              // Fades stars at the edges
      />
      {/* Optional: Add ambient light */}
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default SpaceBackground;
