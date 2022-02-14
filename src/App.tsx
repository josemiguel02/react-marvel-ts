import { Route } from 'wouter'
import { Navbar } from './components/Navbar'
import { Home, Heroes, HeroeDetail } from './pages'

const App = () => {
  return (
    <Navbar>
      <Route path='/' component={Home} />
      <Route path='/heroes' component={Heroes} />
      <Route path='/heroes/:heroe' component={HeroeDetail} />
    </Navbar>
  )
}

export default App
