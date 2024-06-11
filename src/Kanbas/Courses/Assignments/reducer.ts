// import { createSlice } from '@reduxjs/toolkit';
// //import { assignments as initialAssignments } from '../../Database'; 

// const initialState = {
//   assignments: [],
// };

// const assignmentsSlice = createSlice({
//   name: 'assignments',
//   initialState,
//   reducers: {
//     setAssignments: (state, action) => {
//       state.assignments = action.payload;
//     },

//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: new Date().getTime().toString(),
//         course: assignment.course,
//         title: assignment.title,
//         details: assignment.details,
//         availableFrom: assignment.availableFrom,
//         availableUntil: assignment.availablUntil,
//         due: assignment.due,
//         points: assignment.points,
//       };
//       state.assignments = [...state.assignments, newAssignment];
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (assignment: any) => assignment._id !== assignmentId
//       );
//     },
//     handleSave: (state, { payload: assignment }) => {
//       const existingAssignment = state.assignments.find((a: any) => a._id === assignment._id);
//       if (existingAssignment) {
//         state.assignments = state.assignments.map((a: any) =>
//           a._id === assignment._id ? assignment : a
//         );
//       } else {
//         state.assignments = [...state.assignments, assignment];
//       }
//     },

//   },
// });

// export const { addAssignment, deleteAssignment, handleSave } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  assignments: [] as {
    _id: string;
    course: any;
    title: any;
    details: any;
    availableFrom: any;
    availableUntil: any;
    due: any;
    points: any;
  }[],
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments: (
      state,
      action: PayloadAction<
        {
          _id: string;
          course: any;
          title: any;
          details: any;
          availableFrom: any;
          availableUntil: any;
          due: any;
          points: any;
        }[]
      >
    ) => {
      state.assignments = action.payload;
    },
    addAssignment: (
      state,
      action: PayloadAction<{
        course: any;
        title: any;
        details: any;
        availableFrom: any;
        availableUntil: any;
        due: any;
        points: any;
      }>
    ) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        course: action.payload.course,
        title: action.payload.title,
        details: action.payload.details,
        availableFrom: action.payload.availableFrom,
        availableUntil: action.payload.availableUntil,
        due: action.payload.due,
        points: action.payload.points,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    handleSave: (
      state,
      action: PayloadAction<{
        _id: string;
        course: any;
        title: any;
        details: any;
        availableFrom: any;
        availableUntil: any;
        due: any;
        points: any;
      }>
    ) => {
      const existingAssignmentIndex = state.assignments.findIndex(
        (a) => a._id === action.payload._id
      );
      if (existingAssignmentIndex !== -1) {
        state.assignments[existingAssignmentIndex] = action.payload;
      } else {
        state.assignments.push(action.payload);
      }
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, handleSave } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
