import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import GitHubLogo from './Componets/GitHubLogo'
import Users from './Componets/Users';

function App() {
  return (
    <>
<GitHubLogo/>
    <Router>
      <Routes>
        <Route path="/" element={<Users/>} />
        {/* <Route path="/about" element={} />
        <Route path="/contact" element={} /> */}
      </Routes>
    </Router>
    </>

  );
}

export default App;





