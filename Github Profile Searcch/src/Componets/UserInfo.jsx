import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserInfo.css';
import Tabs from './Tabs/Tabs';
import Repo from './Repo/Repo';
import Activity from './Activity/Activity';

import UserContainer from './UserContainer';

function UserInfo() {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  const [type, setType] = useState("");
  const [info, setInfo] = useState([]);
  const [retryAfter, setRetryAfter] = useState(10); // Initial retry delay

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let baseUrl = "https://api.github.com/users";
      let res = await fetch (baseUrl + pathname);
      let data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const getUrl = async () => {
    try {
      let baseUrl = "https://api.github.com/users";
      let res = await fetch (baseUrl + pathname + `/${type}`);
      if (res.status === 429) {
        const retryAfterHeader = res.headers.get('Retry-After');
        const retryAfterInSeconds = parseInt(retryAfterHeader) || 10;
        setRetryAfter(retryAfterInSeconds);
        setTimeout(() => {
          getUrl(); // Retry the request after the specified delay
        }, retryAfterInSeconds * 1000);
      } else {
        let data = await res.json();
        setInfo(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    getUrl();
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




      {/* all section is here */}
      <div className="all-section">

        {/* repos section is here */}

        <div className='repos'>
          {type === 'repos' && (
            <div>
              {info.length > 0 && <Repo />}
            </div>
          )}
        </div>


        {/* activity section is here */}


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


        {/* followers section is here */}


        <div className="followers">

          {
            type === "followers"
            && (

              < >
                {

                  info.length > 0 && <UserContainer users={info} />

                }
              </>
            )
          }
        </div>


      </div>
    </>
  );
}

export default UserInfo;
