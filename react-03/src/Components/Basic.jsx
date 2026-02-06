import React, { use, useState } from 'react'
import Boy from './Boy';
import Girl from './Girl';
import "./Navbar.css"

const Basic = () => {

    const [count, setCout] = useState(0);
    
    let user = {
        name : "Dharmapal",
        Gender : "male"
    }

    console.log(user.Gender)

    return (
        <>
        <div>
            <h1>Condition based Component calling</h1>
            {(user.Gender != "Female") ? <Boy /> : <Girl />}
        </div>

        <button onClick={()=> {
            setCout(count+1)
            console.log(count)
        }} >Click</button>

        <h1 className='btn'> {count} </h1>

        </>
    )
}

export default Basic