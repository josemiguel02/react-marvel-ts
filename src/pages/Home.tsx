import { useTitle } from '../hooks/useTitle'
import image from '../assets/marvel-heroes.jpg'

const Home = () => {
  useTitle('Home 🏠')

  return (
    <div className='flex flex-col items-center h-screen bg-gray-800 p-4'>
      <h1 className='text-white text-3xl font-bold font-mono text-center mt-4'>
        Marvel App!
      </h1>

      <img
        src={image}
        className='md:h-6/12 lg:h-2/4 object-cover rounded my-7 shadow-sm shadow-blue-400'
      />
    </div>
  )
}

export default Home
