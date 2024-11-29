import React,{ useContext } from 'react';
import { UserContext } from '../context/UsersContext';
    
export default function User(props) {
    const {id,name} = props.user;
    const{users, setUsers} = useContext(UserContext);

    const handleDelete=(id)=>{
        const filteredUsers = users.filter((user)=> user.id !==id);
        setUsers(filteredUsers);
    };
  return (
    <article>
        <h1>{id}</h1>
        <h3>{name}</h3>
        <button onClick={()=>{
            handleDelete(id);
        }} >Delete</button>
    </article>
  )
}
