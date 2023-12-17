// CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onToggleCompleted }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{course.name}</h3>
      <div className="course-info">
        <p>Instructor: {course.instructor}</p>
        <p>Due Date: {course.dueDate}</p>
        <p>Progress: {course.progress}%</p>
      </div>
      <div className="button-container">
        {course.completed ? (
          <p className="completed-message">Completed</p>
        ) : (
          <button onClick={onToggleCompleted} className="mark-completed-button">
            {course.markedCompleted ? 'Completed' : 'Mark as Completed'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
