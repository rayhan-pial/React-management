import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UsersContext';

export default function Users(props) {

    const{users} = useContext(UserContext);

  return (
    <section>
    {users.map((user)=>{
       return <User key={user.id} user={user}  />
    })}
    </section>
  )
}
