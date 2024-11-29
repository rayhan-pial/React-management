import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UsersContext';

export default function NewUser(props) {
    const[name, setName] = useState("");
    const{setUsers} = useContext(UserContext);

    const handleNameChange = (event) =>{
        setName(event.target.value);
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), name:name};
        setUsers((previousUser)=> [... previousUser, newUser]);

        setName("");
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"> User Name</label>
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
        <button type='submit'>Add User</button>
    </form>
    </>
  )
}
