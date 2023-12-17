// studentReducer.js
import { ENROLL_COURSE, MARK_COURSE_COMPLETED } from '../actions/studentActions';

const initialState = {
  enrolledCourses: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_COURSE:
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case MARK_COURSE_COMPLETED:
      const updatedCourses = state.enrolledCourses.map((course) =>
        course.id === action.payload ? { ...course, completed: true } : course
      );
      return {
        ...state,
        enrolledCourses: updatedCourses,
      };
    // handle other actions...
    default:
      return state;
  }
};

export default studentReducer;
