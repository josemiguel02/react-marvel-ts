import { Route, Switch } from 'wouter'
import { Navbar } from './components/Navbar'
import { Home, Heroes, HeroeDetail } from './pages'

const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/heroes' component={Heroes} />
        <Route path='/heroes/:heroe' component={HeroeDetail} />
      </Switch>
    </Navbar>
  )
}

export default App
