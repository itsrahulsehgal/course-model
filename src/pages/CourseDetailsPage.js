// CourseDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-container">
      <h1 className="course-header">Course Details</h1>

      <div className="course-section">
        <h2>{course.name}</h2>
        <p className="instructor">Instructor: {course.instructor}</p>
        <p className="description">Description: {course.description}</p>
        <p className="enrollment-status">Enrollment Status: {course.enrollmentStatus}</p>
        <p className="duration">Duration: {course.duration}</p>
        <p className="schedule">Schedule: {course.schedule}</p>
        <p className="location">Location: {course.location}</p>
        <p className="prerequisites">Pre-requisites: {course.prerequisites.join(', ')}</p>
      </div>

      <div className="course-section">
        <h3>Syllabus</h3>
        <ul className="syllabus-list">
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>

      <div className="course-section">
        <h3>Enrolled Students</h3>
        <ul className="enrolled-students-list">
          {course.students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
