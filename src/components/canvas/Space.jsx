// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Stars } from '@react-three/drei';

// const SpaceBackground = () => {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       {/* Add stars */}
//       <Stars 
//         radius={100}      // Radius of the starfield
//         depth={50}        // Depth of the starfield
//         count={5000}      // Number of stars
//         factor={4}        // Star size factor
//         saturation={0.5}  // Star saturation
//         fade={true}       // Fading stars
//       />
//     </Canvas>
//   );
// };

// export default SpaceBackground;

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Stars } from '@react-three/drei';

// const AnimatedStars = () => {
//   const starsRef = useRef();

//   useFrame(({ clock }) => {
//     if (starsRef.current) {
//       // Rotate the stars slowly
//       starsRef.current.rotation.x = clock.getElapsedTime() * 0.05;
//       starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
//     }
//   });

//   return (
//     <group ref={starsRef}>
//       <Stars
//         radius={300}
//         depth={60}
//         count={7000}
//         factor={4}
//         saturation={0.9}
//         fade
//         speed={1.5}
//       />
//     </group>
//   );
// };

// const SpaceBackground = () => {
//   return (
//     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <AnimatedStars />
//       </Canvas>
//     </div>
//   );
// };

// export default SpaceBackground;

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
