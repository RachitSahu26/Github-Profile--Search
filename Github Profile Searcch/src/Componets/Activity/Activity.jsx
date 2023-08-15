import React from 'react'
import "./Activity.css";
function Activity({ Activity }) {
    return (
        <>
            {
                Activity?.map((acti, id) => (
                    <div key={id} className='acti-data'>
                        <div className="active-user-img">

                        <img src={acti.actor?.avatar_url}></img>
                        </div>
                        <h1>
                            {acti?.actor?.login}
                            <br />
                            
                            {acti?.type}
                            <br />
                            {acti?.repo?.name}
                        </h1>
                    </div>

                ))
            }

        </>
    )
}

export default Activity