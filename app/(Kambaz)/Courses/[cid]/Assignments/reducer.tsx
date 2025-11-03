import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    updateAssignment: (state, { payload: assignment }) => {
      const oldAssignment = state.assignments.find(
        (a: any) => a._id === assignment._id
      );
      if (oldAssignment) {
        Object.assign(oldAssignment, assignment);
      } else {
        state.assignments = [...state.assignments, assignment] as any;
      }
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },
  },
});

export const { updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
