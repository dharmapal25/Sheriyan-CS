import React, { useEffect, useState } from 'react'

const LevelTwoForm = () => {

  const [userName, setUserName] = useState("");
  const [userPasswd, setUserPasswd] = useState("");
  const [usersObj, setUsersObj] = useState({});

  const submitData = (e) => {
    e.preventDefault()

    let userData = {
      name : userName,
      password : userPasswd
    }

    setUsersObj(userData)

    console.log(usersObj);
    console.log("Done!");
  }

  useEffect(() => {
    console.log("usersObj updated >>> ", usersObj);
  }, [usersObj]);



  return (
    <div>
      <form onSubmit={submitData} >

        <input type="text"
          placeholder='Enter name...'
          value={userName}
          onChange={e => setUserName(e.target.value) } />

        <input type="password"
          placeholder='Enter unique password...'
          value={userPasswd}
          onChange={e => setUserPasswd(e.target.value) } />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default LevelTwoForm