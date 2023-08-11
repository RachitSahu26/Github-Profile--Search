import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserInfo.css';

function UserInfo() {
  const [user, setUser] = useState(null); // Initialize user state as null
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let baseUrl = "https://api.github.com/users";
      let res = await fetch(baseUrl + pathname);
      let data = await res.json(); // Use await here
      setUser(data); // Set the fetched user data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  return (
    <>
     <button className="button" onClick={() => navigate("/")}>
              Back
            </button>
      {user ? (
        <div className="profile">
          <div className="img-box">
            <img src={user.avatar_url} className="user-img" alt="User Avatar" />
          </div>
          <div className="user-profile-box">
            <h1><span>Name:  </span>{user.name}</h1>
            <h1><span>Login_name:  </span>{user.login}</h1>
            <h1><span>Followers:  </span>{user.followers}</h1>
            <h1><span>Following:  </span>{user.following}</h1>
            <h1><span>Public_Repositories:  </span>{user.public_repos}</h1>
            <h1><span>Join: </span>{user.created_at}</h1>
           <a href={user.html_url}>

            <button className="button2">
              Visit
            </button>
           </a>
          </div>
        </div>
      ) : (
        <h1>There is nothing</h1>
      )}
    </>
  );
}

export default UserInfo;
