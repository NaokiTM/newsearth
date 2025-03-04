import GlobeComponent from './components/GlobeComponent'
import Headlines from './components/Headlines'

function App() {
  return (
    <>
    <div className='flex h-full text-white bg-black'>
      <div className='w-2/3'>
          <GlobeComponent className='flex flex-1 justify-center items-center w-full' /> 
      </div>
      <div className='w-1/3'>
          <Headlines className='flex flex-1 justify-center items-center w-full'/>    
      </div>
    </div>
    </>
  )
}

export default App
