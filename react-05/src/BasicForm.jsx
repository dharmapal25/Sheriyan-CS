import React, { use, useState } from 'react'

const BasicForm = () => {

    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState([]);

    const submitData = (e) => {
        e.preventDefault()
        setUsers([...users, userName])

        console.log("Done!");
    }

    const onChangeInput = (e) => {
        setUserName(e.target.value)
    }

    return (
        <div>

            <form onSubmit={submitData} >

                <input type="text"
                    placeholder='Enter name...'
                    value={userName}
                    onChange={onChangeInput} />

                <button>Submit</button>

            </form>


            {
                users.map((elm, idx) => {
                    return <h4 key={idx} > {elm} </h4>
                })
            }

        </div>

    )
}

export default BasicForm