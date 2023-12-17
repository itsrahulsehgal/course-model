// studentActions.js
export const ENROLL_COURSE = 'ENROLL_COURSE';
export const MARK_COURSE_COMPLETED = 'MARK_COURSE_COMPLETED';

export const enrollCourse = (course) => ({
  type: ENROLL_COURSE,
  payload: course,
});

export const markCourseCompleted = (courseId) => ({
  type: MARK_COURSE_COMPLETED,
  payload: courseId,
});
