
import './App.css'

import HandlingEvent from './components/handlingevent/HandlingEvent'
import MapAndFilter from './components/map/MapAndFilter'
import Navbar from './components/navbar/Navbar'
import Props from './components/props/Props'
import StateAndProps from './components/stateAndprops/StateAndProps'

function App() {

  return (
      <div className='App'>
        <br />
        <Props/>
        <br />
        <hr />
        <StateAndProps/>
        <br />
        <hr />
        <br />
        <Navbar/>
        <br />
        <hr />
        <br />
        <MapAndFilter/>
        <br />
        <hr />
        <br />
        <HandlingEvent/>

      </div>   
  
  )
}

export default App
