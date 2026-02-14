import React from 'react'
import "./App.css"
import Home from './Components/Home'
import Tab from './Components/Tab'
import Calculator from './Components/Pages/Calculator'

const App = () => {
  return (
    <div>
      <img src="../src/Images/macos.jpg" className='appJsx-image' draggable="false"/>

      <Home />
      {/* <Tab/> */}
      <Calculator/>
    </div >
  )
}

export default App