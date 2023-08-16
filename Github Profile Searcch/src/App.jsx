import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import GitHubLogo from './Componets/GitHubLogo'
import Users from './Componets/Users';
import UserInfo from './Componets/UserInfo';

































function App() {

  return (
    <>
<GitHubLogo/>
    <Router>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/:name" element={<UserInfo/>} />
        {/* <Route path="/contact" element={} /> */}
      </Routes>
    </Router>
    </>

  );
}

export default App;





