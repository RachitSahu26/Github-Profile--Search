import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserInfo.css';
import Tabs from './Tabs/Tabs';
import Repo from './Repo/Repo';
import Activity from './Activity/Activity';
// import Followers from './Followers/Followers';
// import UserContainer from './UserContainer';

function UserInfo() {
  const [user, setUser] = useState(null); // Initialize user state as null
  const { pathname } = useLocation();
  const [type, setType] = useState("");
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();
  // ..............user information data fetch...............
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
  // .........user repo, followers, Activity data fetch...........
  const getUrl = async () => {
    try {
      let baseUrl = "https://api.github.com/users";
      let res = await fetch(baseUrl + pathname + `/${type}`);
      let data = await res.json();
      console.log(data)
      setInfo(data);
    } catch (error) {
      console.error("not found a getUrl  error");
    }
  };


  useEffect(() => {
    fetchData();
    getUrl();

    console.log(type)
  }, [pathname, type]);

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
            <a href={user.html_url} target='_blank'>

              <button className="button2">
                Visit
              </button>
            </a>
          </div>
        </div>
      ) : (
        <h1>There is nothing</h1>
      )}

      <div className='user-details' >

        <Tabs type={type} setType={setType} />
      </div>





      <div className="all-section">

    

      <div className='repos'>
        {type === 'repos' && (
          <div>
            {info.length > 0 && <Repo users={info} />}
          </div>
        )}
      </div>





      <div className='activity'>

        {
          type === "received_events"
          && (


            <>

              {


                info.length > 0 && <Activity Activity={info} />

              }
            </>



          )
        }

      </div>

      {
        type === "followers"
        && (

          <div className='followers'>
            {/* <UserContainer /> */}
          </div>
        )
      }


</div>
    </>
  );
}

export default UserInfo;
