'use client';

import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Spline, { SPEObject } from '@splinetool/react-spline';
import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const BackgroundSphere = () => {
  // const sphereRef = useRef<SPEObject>();
  const sceneRef = useRef(null);
  const isInView = useInView(sceneRef, {
    once: true,
  });

  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div ref={sceneRef} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }} className='absolute inset-0'>
      <Canvas>
        <Scene />
      </Canvas>
    </motion.div>
  );
};

export default BackgroundSphere;

const Scene = ({ ...props }) => {
  // const { nodes, materials } = useSpline('https://prod.spline.design/a0nzUnFI2BHHkaxq/scene.splinecode');
  return (
    <group {...props} dispose={null}>
      <pointLight name='Point Light' castShadow intensity={1} distance={2000} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-near={100} shadow-camera-far={100000} color='#8f9be9' position={[-61.67, 139.59, 98.96]} rotation={[0, 0, 0]} scale={[-1, 1, 158.84]} />
      {/* <mesh name='Sphere 5' castShadow receiveShadow position={[128.5, -88, 98.5]} />
      <mesh name='Sphere 3' castShadow receiveShadow position={[-62.5, 143, 98.5]} />
      <mesh name='Sphere 4' castShadow receiveShadow position={[-121.5, -49, 98.5]} />
      <mesh name='Sphere 2' castShadow receiveShadow position={[150.5, 51, 98.5]} />
      <mesh name='Sphere' castShadow receiveShadow position={[15.5, -1, 98.5]} /> */}
      <mesh>
        <sphereGeometry args={[100, 32, 32]} />
        <meshPhongMaterial color='blue' />
      </mesh>
      <directionalLight
        name='Directional Light'
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-1000}
        position={[200, 300, 300]}
      />
      <OrthographicCamera name='1' makeDefault={true} far={10000} near={-50000} />
      <hemisphereLight name='Default Ambient Light' intensity={0.75} color='#eaeaea' />
    </group>
  );
};

// function Scene({ ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/a0nzUnFI2BHHkaxq/scene.splinecode');
//   return (
//     <group {...props} dispose={null}>
//       <pointLight name='Point Light' castShadow intensity={1} distance={2000} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-near={100} shadow-camera-far={100000} color='#8f9be9' position={[-61.67, 139.59, 98.96]} rotation={[0, 0, 0]} scale={[-1, 1, 158.84]} />
//       <mesh name='Sphere 5' geometry={nodes['Sphere 5'].geometry} material={materials.Base} castShadow receiveShadow position={[128.5, -88, 98.5]} />
//       <mesh name='Sphere 3' geometry={nodes['Sphere 3'].geometry} material={materials['Sphere 3 Material']} castShadow receiveShadow position={[-62.5, 143, 98.5]} />
//       <mesh name='Sphere 4' geometry={nodes['Sphere 4'].geometry} material={materials.Neon} castShadow receiveShadow position={[-121.5, -49, 98.5]} />
//       <mesh name='Sphere 2' geometry={nodes['Sphere 2'].geometry} material={materials['light blue']} castShadow receiveShadow position={[150.5, 51, 98.5]} />
//       <mesh name='Sphere' geometry={nodes.Sphere.geometry} material={materials.Base} castShadow receiveShadow position={[15.5, -1, 98.5]} />
//       <directionalLight
//         name='Directional Light'
//         castShadow
//         intensity={0.7}
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-near={-10000}
//         shadow-camera-far={100000}
//         shadow-camera-left={-1000}
//         shadow-camera-right={1000}
//         shadow-camera-top={1000}
//         shadow-camera-bottom={-1000}
//         position={[200, 300, 300]}
//       />
//       <OrthographicCamera name='1' makeDefault={true} far={10000} near={-50000} />
//       <hemisphereLight name='Default Ambient Light' intensity={0.75} color='#eaeaea' />
//     </group>
//   );
// }
