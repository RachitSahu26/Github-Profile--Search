import React from 'react'
import "./UserCont.css";
import { Link } from 'react-router-dom';

function UserContainer({ users }) {
    return (
        <>
            {
                users && users.map((fetched, id) => (

                    <div className='card'
                        key={id}
                    >
                        <div className="card-img-area">
                            <div className="img-circle">


                                <img src={fetched?.avatar_url}></img>
                            </div>
                            <h1>{fetched.login}</h1>
                            <Link to={`/${fetched?.login}`}>
                                <button className='view-btn'>View</button>
                            </Link>
                        </div>
                    </div>

                ))
            }
        </>

    )
}

export default UserContainer