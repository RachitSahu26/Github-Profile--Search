import React from 'react'
import "./Activity.css";
function Activity({ Activity }) {
    return (
        <>
            {
                Activity?.map((acti, i) => (
                    <div key={id} className='acti-data'>
                        <img src={acti.actor?.avatar_url}></img>
                        <h1>
                            {acti?.actor?.login}
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