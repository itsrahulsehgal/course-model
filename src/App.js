// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseListingPage/>} />
        <Route path="/course/:id" element={<CourseDetailsPage/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
