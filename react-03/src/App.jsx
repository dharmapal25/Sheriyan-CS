import React from 'react'
import Navbar from './Components/Navbar'
import logo from "./images/boy.jpg"
import wix from "./images/wix_logo.png"
import Basic from './Components/Basic'

const App = () => {

  return (
    
    <div>

      <Navbar logo={logo} bgcolor="green" links={["Home","About","Contact Us","Projects"]} />
      <Navbar logo={wix}  bgcolor="crimson" links={["Home","Courses","Blogs","Achivements"]} />

      <Basic/>

      
    </div>
  )
}

export default App