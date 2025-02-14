import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
// import * as d3 from "d3-geo";



const Globe = ({ setClickedSection }) => {
    const earthTexture = useTexture('/earth.jpg')
    const globeRef = useRef()

    // Helper function to convert cartesian to spherical coordinates
    const cartesianToSpherical = (x, y, z) => {
        const radius = Math.sqrt(x * x + y * y + z * z);
        const theta = Math.atan2(y, x); // longitude (horizontal)
        const phi = Math.acos(z / radius); // latitude (vertical)
        return { radius, theta, phi };
    };

    // A simple function to determine the section based on spherical coordinates
    const determineSection = (theta, phi) => {
        const latSection = Math.floor((phi / Math.PI) * 4); // Dividing into 4 sections by latitude
        const longSection = Math.floor((theta / (Math.PI * 2)) * 8); // Dividing into 8 sections by longitude
        return `Section ${latSection + 1}, ${longSection + 1}`;
    };

    // responsible for handling when a country is clicked, and opens articles according to the selected country
    const handleGlobeClick= (event) => {
        const clickedPoint = event.point
        
        
        // Convert to spherical coordinates (latitude and longitude)
        const { x, y, z } = clickedPoint;
        const { theta, phi } = cartesianToSpherical(x, y, z);

        // Example of defining regions based on latitude (phi) and longitude (theta)
        const section = determineSection(theta, phi);
        setClickedSection(section);
    }

    return (
        <>
            <mesh ref={globeRef} onClick = {handleGlobeClick} scale={0.75} rotation={[0, Math.PI / 2, 0]}>
                <sphereGeometry args={[4, 64, 64]} />
                {/* <meshStandardMaterial color="royalblue" /> */}
                <meshStandardMaterial map={earthTexture} />
            </mesh>
        </>
    );
};

const GlobeComponent = () => {
    const [clickedSection, setClickedSection] = useState(null)

  return (
    <div className='flex flex-row'>
        <div className='flex flex-col justify-center items-center w-1/2'>
            {/* opened articles show up in here */}
            <div className="w-90 text-center p-8 mt-8 shadow-xl h-[90vh] overflow-y-auto flex flex-col"> 
                <div>
                    {clickedSection}

                    {/* article title */}
                    <h2 className="text-xl font-bold">article title</h2>

                    {/* article image */}
                    <img
                    // src={articles[index].urlToImage}
                    // alt={articles[index].title} //replace with text that indicates that its an image
                    className="w-full max-h-60 content-cover rounded-md my-2"
                    />

                    {/* article description */}
                    <div className="pb-4 overflow-y-auto mb-2">
                    <p className="text-gray-600">article description</p>
                    </div>

                    {/* article URL */}
                    <a className="hover:underline text-blue-500">Read more on this article</a>
                </div>
            </div>
        </div >
        <div className='flex flex-col items-center justify-center w-1/2'>
            <div className="flex flex-col items-center justify-center pb-8 pt-2 tracking-tight">
                <img src="/Globe.png" alt="Globe" className='max-h-25'></img>
            </div>
            <div className='w-[400px] h-[400px]'>
                <Canvas className = 'w-full h-full'camera={{position: [0,0,5], fov: 90}}>
                    <ambientLight intensity={4} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Globe setClickedSection={setClickedSection}/>
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        </div>
    </div>
  )
}

export default GlobeComponent