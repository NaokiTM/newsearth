import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useState, useEffect } from 'react';

const Sphere = () => {
    const earthTexture = useTexture('/earth.jpg')

    return (
        <mesh scale={0.75} rotation={[0, Math.PI / 2, 0]}>
            <sphereGeometry args={[4, 64, 64]} />
            {/* <meshStandardMaterial color="royalblue" /> */}
            <meshStandardMaterial map={earthTexture} />
        </mesh>
    );
};

const Globe = () => {
    // all of this used for sorting through subjects when filtering articles around the earth. 
    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [subject, setSubject] = useState("bitcoin")

    // const changeSubject = (event) => {
    //   setSubject(event.target.value)
    // }

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //       try {
    //         const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Use environment variables
    //         const response = await fetch(
    //           `https://newsapi.org/v2/everything?q=${subject}&apiKey=&apiKey=${ apiKey }`
    //         );
    //         if (!response.ok) throw new Error("Failed to fetch news");
    //         const data = await response.json();
    //         setArticles(data.articles); // Update state with fetched data
    //       } catch (error) {
    //         setError(error.message);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchArticles();
    //   }, []);


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
                <Canvas classname = 'w-full h-full'camera={{position: [0,0,5], fov: 75}}>
                    <ambientLight intensity={4} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Sphere />
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

export default Globe