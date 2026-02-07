import React, { use, useEffect, useState } from 'react'
import "./App.css"
const App = () => {

  const [value, setValue] = useState("Hacker");

const [data, setData] = useState("");
const [arr, setArr] = useState([]);

const arrFun = () => {
  setArr([...arr, data]);
  setData(""); // optional: clear input after submission
};
useEffect(() => {
  console.log(arr);
}, [arr]);



  return (

    <>

      <div>

        <form onSubmit={(e) => {
          e.preventDefault()
          console.log("Form sumitted..!");
          // console.log(e.target.input[0].value)
          console.dir(e.target[0].value)
          console.log(e.target[0].value)
          console.log(e.target[1].value)

        }} >

          <input type="text" placeholder='Enter name' />
          <input type="password" placeholder='Enter password' />
          <button>Submit</button>

        </form>

      </div>


      <div className="two-way-binding">

        <input type="text"
          value={value}
          placeholder='Enter your name...'
          onChange={(e) => {
            setValue(e.target.value)
            // console.log(value)
          }} />


        <form onSubmit={e => {
          e.preventDefault()
          arrFun(e)
        }} >
          <input type="text" value={data} onChange={e => setData(e.target.value)} />
          <button  >submit</button>
        </form>



      </div>


    </>
  )
}

export default App;