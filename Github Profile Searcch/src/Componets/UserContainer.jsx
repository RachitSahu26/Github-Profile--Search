import React from 'react'
import "./UserCont.css";

function UserContainer({ users }) {
    return (
        <>
            {
                users && users.map((user, idx) => (

                    <div className='card'
                        key={idx}
                    >
                        <div className="card-img-area">
                            <div className="img-circle">


                                <img src={user?.avatar_url}></img>
                            </div>
                            <h1>{user?.login}</h1>
                            <button className='view-btn'>View</button>
                        </div> 
                    </div>

                ))
            }
        </>

    )
}

export default UserContainer