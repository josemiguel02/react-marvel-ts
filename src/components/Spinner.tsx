import Loader from '../assets/loader.png'

export const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <img src={Loader} className='w-40 my-20 animate-ping' />
    </div>
  )
}
