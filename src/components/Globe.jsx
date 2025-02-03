import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

const Sphere = () => {
    return (
        <mesh scale={0.75} rotation={[1, 1, 0]}>
            <sphereGeometry args={[4, 64, 64]} />
            <meshStandardMaterial color="royalblue" />
        </mesh>
    );
};

const Globe = () => {
  return (
    <>
    <div className='w-[500px] h-[500px] border-2'>
        <Canvas classname = 'w-full h-full'camera={{position: [0,0,5], fov: 75}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Sphere />
            <OrbitControls enableZoom={false}/>
        </Canvas>
    </div>
    </>
  )
}

export default Globe