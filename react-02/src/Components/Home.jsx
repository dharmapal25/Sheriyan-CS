import React from 'react'
import './Home.css'
function Home(Props) {


    let uname = "Dharmapal";

    let arr = ["John", "Flash", "Carry", "Harry"]

    console.log(Props);

    let objData = Props.mainData;

    let { name, course, age, subjects, year } = objData

    console.log(subjects)

    console.log(objData);



    return (
        <div className='container' >

            <div className="main">

                <h1>My name is {uname} </h1>

                <h1> name is : {arr} </h1>

                <h1> name is : {arr[0]} </h1>

                {
                    arr.map((e, i) => {
                        return <h1 key={i} > name is : {e} id : {i + 1}  </h1>
                    })
                }


                <h2>from the Props data</h2>

                <h3>simple roll no = {Props.roll}</h3>

                <br />
                <h4>Object data access using props</h4>

                <br />
                <h3>Username : {name} </h3>
                <h3>Age : {age} </h3>
                <h3>Course : {course} </h3>
                <h3>year : {year} </h3>
                <h3>Subjects : {...subjects} </h3>

            </div>

           

        </div>
    )
}

export default Home