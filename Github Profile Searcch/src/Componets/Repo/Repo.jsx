import React from 'react'
import "./Repo.css";
function Repo({ users }) {
    return (
        <>
            {
                users && users.map((user, id) => (

                    <div key={id} className='repo-box'  >
                        <a href={user.html_url} target='_blank'>
                            {user.full_name}

                        </a>

                        <div className="user-foks">
                        <h1> Language:{user.language}</h1>
                          
                            <h1 className='fork'> Fork:{user.forks}</h1>
                            <h1 className='star'>Sarts:{user.stargazers_count}</h1>

                        </div>

                    </div>

                ))}

        </>
    )
}

export default Repo