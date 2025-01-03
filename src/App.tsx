import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetailsPage from './pages/UserDetailsPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
