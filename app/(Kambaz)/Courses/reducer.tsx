/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
import { setCurrentUser } from "../Account/reducer";
interface Course {
  _id: string;
  [key: string]: any;
}

interface InitialState {
  courses: Course[];
  enrollments: string[];
}

const initialState: InitialState = {
  courses: courses,
  enrollments: [],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }) => {
      const newCourse = { ...course, _id: uuidv4() };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (course: any) => course._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    enrollInCourse: (state, { payload: courseId }) => {
      if (!state.enrollments.includes(courseId)) {
        state.enrollments.push(courseId);
      }
    },
    unenrollFromCourse: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (id: string) => id !== courseId
      );
    },
    deleteEnrollment: (state, { payload: { enrollmentId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId
      );
    },
    addEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment] as any;
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
    // getUserEnrollments: (state, action) => {
    //   // Implementation can be added here if needed
    // },
    // setCurrentUser: (state, action) => {

    // }
  },
});
export const {
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollInCourse,
  unenrollFromCourse,
  deleteEnrollment,
  addEnrollment,
  setEnrollments,
} = coursesSlice.actions;
export default coursesSlice.reducer;
