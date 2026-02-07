import React, { useState } from 'react'
import "./App.css"
import BasicForm from './BasicForm';
import LevelTwoForm from './LevelTwoForm';

const App = () => {

  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: userName,
      role: userRole
    };

    setAllUsers([...allUsers, newUser]);

    setUserName("");
    setUserRole("");
  };

  console.log(allUsers);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="text"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          placeholder="Role"
        />

        <button>Submit</button>
      </form>


      <BasicForm/>

      <LevelTwoForm />

    </div>
  );
};

export default App;
