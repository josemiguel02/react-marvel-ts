import { useEffect, useState } from 'react'
import { Heroe } from '../interfaces'
import data from '../data/heroes.json'

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getHeroeByName = (nameHeroe: string) => {
    return heroes.find(heroe => heroe.hero === nameHeroe) ?? ({} as Heroe)
  }

  useEffect(() => {
    setTimeout(() => {
      setHeroes(data)
      setLoading(false)
    }, 300)
  }, [])

  return {
    heroes,
    loading,
    getHeroeByName
  }
}
