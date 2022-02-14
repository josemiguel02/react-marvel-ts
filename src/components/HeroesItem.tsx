import { FC } from 'react'
import { useLocation } from 'wouter'
import { Heroe } from '../interfaces'

interface HeroesItemProps {
  heroe: Heroe
}

export const HeroesItem: FC<HeroesItemProps> = ({ heroe }) => {
  const { hero, img } = heroe
  const [, setLocation] = useLocation()

  return (
    <div
      className='flex items-center gap-3 bg-blue-700 w-40 rounded-md hover:bg-blue-800 cursor-pointer p-3  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      onClick={() => setLocation(`/heroes/${hero}`)}
    >
      <img src={img} className='h-12' alt={hero} />
      <p className='text-gray-100 overflow-hidden whitespace-nowrap  text-ellipsis	 font-mono text-lg'>
        {hero}
      </p>
    </div>
  )
}
