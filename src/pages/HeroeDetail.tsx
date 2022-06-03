import { useRoute } from 'wouter'
import { useHeroes } from '../hooks/useHeroes'
import { useTitle } from '../hooks/useTitle'

const HeroeDetail = () => {
  const [, params] = useRoute('/heroes/:heroe')
  const heroeName = decodeURI(params!.heroe)
  useTitle(`Heroes | ${heroeName} 🦸‍♂️`)
  const { getHeroeByName } = useHeroes()
  const { img, link, biography } = getHeroeByName(heroeName)

  return (
    <div className='flex flex-col items-center p-8 min-h-screen bg-gray-800 text-white'>
      <div className='flex flex-col md:flex-row md:gap-4 md:w-[calc(80%+1rem)] lg:w-[calc(70%+1rem)] items-center py-5 px-2 border-dashed border-2 rounded-xl'>
        <div className='flex flex-col items-center w-full'>
          <a href={link} target='_blank'>
            <p className='font-mono font-bold text-2xl lg:text-3xl text-center hover:text-gray-300'>
              {heroeName}
            </p>
          </a>
          <img src={img} className='lg:h-40 md:h-28 object-cover my-3' />
        </div>

        <p className='font-mono md:text-base lg:text-lg p-3 lg:p-0'>{biography}</p>
      </div>
    </div>
  )
}

export default HeroeDetail
