import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useState, useEffect } from 'react';
import * as d3 from "d3-geo";

const Globe = () => {
    const earthTexture = useTexture('/earth.jpg')

    return (
        <mesh scale={0.75} rotation={[0, Math.PI / 2, 0]}>
            <sphereGeometry args={[4, 64, 64]} />
            {/* <meshStandardMaterial color="royalblue" /> */}
            <meshStandardMaterial map={earthTexture} />
        </mesh>
    );
};

const GlobeComponent = () => {

  return (
    <div className='flex flex-row'>
        <div className='flex flex-col justify-center items-center w-1/2'>
            {/* <div className="text-5xl p-4 italic">Headlines</div>
                <div className="flex flex-row space-x-2 italic pb-4">
                <div>Sort by subject:</div>
                <select id="options" className="border border-gray-300 rounded-md cursor-pointer">
                    <option value="US" onChange={ changeSubject }>Bitcoin</option>
                    <option value="GB" onChange={ changeSubject }>United Kingdom headlines</option>
                </select>
            </div> */}
        </div >
        <div className='flex flex-col items-center justify-center w-1/2'>
            <div className="flex flex-col items-center justify-center pb-8 pt-2 italic font-bold tracking-tight">
                <div className="text-7xl ">The Globe</div>
                <div>Planet Earths digital interactive newspaper.</div>
            </div>
            <div className='w-[400px] h-[400px]'>
                <Canvas className = 'w-full h-full'camera={{position: [0,0,5], fov: 75}}>
                    <ambientLight intensity={4} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Globe />
                    <OrbitControls enableZoom={false}
                    // maxPolarAngle={Math.PI / 2} 
                    // minPolarAngle={Math.PI / 2} 
                    />
                </Canvas>
            </div>
        </div>
    </div>
  )
}

export default GlobeComponent