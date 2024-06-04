import { createSlice } from '@reduxjs/toolkit';
import { assignments as initialAssignments } from '../../Database'; 

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        course: assignment.course,
        title: assignment.title,
        details: assignment.details,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availablUntil,
        due: assignment.due,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
    handleSave: (state, { payload: assignment }) => {
      const existingAssignment = state.assignments.find((a: any) => a._id === assignment._id);
      if (existingAssignment) {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        );
      } else {
        state.assignments = [...state.assignments, assignment];
      }
    },

  },
});

export const { addAssignment, deleteAssignment, handleSave } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;