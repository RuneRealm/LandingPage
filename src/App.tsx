import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
