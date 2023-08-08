import React, { useEffect, useState } from 'react'
import "./Users.css";
import UserContainer from './UserContainer';

function Users() {
    const [users,setUsers]=useState([]);
    let baseUrl="https://api.github.com/users";
    const getprofile= async()=>{
const response=await fetch(baseUrl);
const data=await response.json()
console.log(data);
setUsers(data);
}


useEffect(()=>{
    getprofile();
},[setUsers] )
  return (
    <div className='card-area'>

<UserContainer users={users}/>


    </div>
  )
}

export default Users