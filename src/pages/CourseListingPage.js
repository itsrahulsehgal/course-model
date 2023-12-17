// CourseListingPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesSuccess } from '../redux/actions/courseActions';
import { enrollCourse } from '../redux/actions/studentActions';
import { fetchCourses } from '../services/api';
import { Link } from 'react-router-dom';
import './CourseListingPage.css';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await fetchCourses();
      dispatch(fetchCoursesSuccess(coursesData));
    };

    fetchData();
  }, [dispatch]);

  const [enrolledCourses, setEnrolledCourses] = React.useState([]);

  const handleEnrollClick = (course) => {
    dispatch(enrollCourse(course));
    setEnrolledCourses([...enrolledCourses, course.id]);
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  return (
    <div>
      <div className="navbar">
        <div className="company-name">Rahul Sehgal</div>
        <Link to="/dashboard" className="dashboard-link">
          Go to Dashboard
        </Link>
      </div>

      <div className="course-list-container">
        <h1>Welcome to the Courses</h1>
        <p>Enroll in the courses below:</p>
        <ul>
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <div>
                <Link to={`/course/${course.id}`} className="course-link">
                  {course.name}
                </Link>
                <button
                  onClick={() => handleEnrollClick(course)}
                  disabled={isEnrolled(course.id)}
                  className="enroll-button"
                >
                  {isEnrolled(course.id) ? 'Enrolled' : 'Enroll'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseListingPage;
