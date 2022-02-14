import { FC } from 'react'
import { HeroesList } from '../components/HeroesList'
import { useTitle } from '../hooks/useTitle'

const App: FC = () => {
  useTitle('Heroes 🦸‍♂️')

  return <HeroesList />
}

export default App
