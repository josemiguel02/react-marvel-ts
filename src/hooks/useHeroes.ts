import { useEffect, useState } from 'react'
import { Heroe } from '../interfaces'

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([] as Heroe[])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchData = async () => {
    try {
      const res = await fetch('/src/data/heroes.json')
      const data: Heroe[] = await res.json()
      setLoading(false)
      setHeroes(data)
    } catch (e) {
      setLoading(false)
      setError(e as string)
    }
  }

  const getHeroeByName = (nameHeroe: string) => {
    return heroes.find(heroe => heroe.hero === nameHeroe) ?? ({} as Heroe)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    heroes,
    getHeroeByName,
    loading,
    error
  }
}
