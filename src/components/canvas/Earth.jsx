// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";


// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={18} position-y={-2} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 80, // Slightly increased FOV for better visibility
//         near: 0.1,
//         far: 500,
//         position: [0, 0, 27], // Camera moved further back
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

// // const Earth = () => {
// //   const earth = useGLTF("./planet/scene.gltf");

// //   return (
// //     <primitive 
// //       object={earth.scene} 
// //       scale={18} 
// //       position={[5, -1, 0]} // Moved Earth upwards by increasing `y` value to -1
// //       rotation-y={0} 
// //     />
// //   );
// // };

// // const EarthCanvas = () => {
// //   return (
// //     <Canvas
// //       shadows
// //       frameloop="demand"
// //       dpr={[1, 2]}
// //       gl={{ preserveDrawingBuffer: true }}
// //       camera={{
// //         fov: 80, // Field of view for better visibility
// //         near: 0.1,
// //         far: 500,
// //         position: [2, 0, 30], // Camera adjusted slightly
// //       }}
// //     >
// //       <Suspense fallback={<CanvasLoader />}>
// //         <OrbitControls
// //           autoRotate
// //           enableZoom={false}
// //           maxPolarAngle={Math.PI / 2}
// //           minPolarAngle={Math.PI / 2}
// //         />
// //         <Earth />

// //         <Preload all />
// //       </Suspense>
// //     </Canvas>
// //   );
// // };

// // export default EarthCanvas;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={[6.5, 6.5, 6.5]} position-y={[0]} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{ width: '500px', height: '400px' }}

      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 100,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;