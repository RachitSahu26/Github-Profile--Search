import React from 'react'

function Tabs({setType,type}) {
  return (
    <>
  <button id='repo-btn'
          onClick={() => setType('repos')}
          className={`button3 ${type === 'repos' ? 'active' : ''}`}
        >
          Repositories
        </button>
        
        
        <button
         id='activity-btn'
          onClick={() => setType('received_events')}
          className={`button3 ${type === 'received_events' ? 'active' : ''}`}
        >
          Activity
        </button>



        <button
         id='followers-btn'
          onClick={() => setType('followers')}
          className={`button3 ${type === 'followers' ? 'active' : ''}`}
        >
          Followers
        </button>

        <hr></hr>





    </>
  )
}

export default Tabs