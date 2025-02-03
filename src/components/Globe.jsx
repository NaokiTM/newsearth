import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const apiKey = import.meta.env.REACT_APP_NEWS_API_KEY; 
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching news:', error));

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
    <div className='w-[400px] h-[400px] border-2'>
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