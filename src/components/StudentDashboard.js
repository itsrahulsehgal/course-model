// StudentDashboard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCourseCompleted } from '../redux/actions/studentActions';
import CourseCard from './CourseCard';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);

  const handleToggleCompletedClick = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Student Dashboard</h1>
      <div className="course-list">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <div key={course.id}>
              <CourseCard
                course={course}
                onToggleCompleted={() => handleToggleCompletedClick(course.id)}
              />
            </div>
          ))
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
