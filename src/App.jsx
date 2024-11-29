import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UserContext } from './context/UsersContext';

function App() {
  const [users,setUsers] = useState([
    {id:1, name:"rayhan"},
    {id:2, name:"pial"}
  ]);



  return (
    <UserContext.Provider value={{ users, setUsers}} >
      <div>
        <NewUser />
        <Users />
      </div>
    </UserContext.Provider>
  )
}

export default App
