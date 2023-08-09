import React, { useEffect, useRef, useState } from 'react'
import "./Users.css";
import UserContainer from './UserContainer';
import Loading from './Loading';

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([null]);

  const user = useRef('')
  let baseUrl = "https://api.github.com/users";


  //  .....................function of all user find profile.....................
  const getprofile = async () => {
    if (user.current.value == "") {
      setLoading(true);
      const response = await fetch(baseUrl);
      const data = await response.json()
      setUsers(data);
      setLoading(null);
    } else {

    }

  }











  // .............................function for findUser.................
  const findUser = async () => {
    setLoading(true);
    if (user.current.value !== "") {
      const res = await fetch(baseUrl + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = "";
    } else {
      getprofile();
    }
    setLoading(null);
  }




  useEffect(() => {
    getprofile();
  }, [setUsers])
  return (<>
    <div className="search-profile">
      <input ref={user} type='text' placeholder='Search github username.. ' ></input>
      <button onClick={findUser}>Search</button>
    </div>


    <div className='card-area'>

      {
      loading ? <Loading /> : <UserContainer users={users} />

      }


    </div>
  </>

  )
}

export default Users