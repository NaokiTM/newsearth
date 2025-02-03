import Title from './components/Title'
import Globe from './components/Globe'
import Headlines from './components/Headlines'
import CurrentArticle from './components/CurrentArticle'

function App() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <Title/>
    </div>
    <div className='flex'>
      <div className='w-full'>
          <CurrentArticle className='flex flex-1 justify-center items-center w-full'/> 
      </div>
      <div className='w-full'>
          <Globe className='flex flex-1 justify-center items-center w-full' /> 
      </div>
      <div className='w-full'>
          <Headlines className='flex flex-1 justify-center items-center w-full'/>    
      </div>
    </div>
    </>
  )
}

export default App
