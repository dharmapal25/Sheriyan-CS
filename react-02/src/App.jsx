import React from 'react'
import Home from "./Components/Home"
import Button from './Components/Button'

const App = () => {

  let obj = {
    name : "Dharmapal",
    age : 20,
    course : "CSE",
    year : "2nd",
    subjects : ["OS ","Computer network "," Java ","Python "]
  }

  return (
    
    <div>

    <Home roll={450} mainData = {obj} />

    <Button name="Submit" />
    <Button name="Click me" />
    <Button name="Submit" />

      
      
    </div>
  )
}

export default App