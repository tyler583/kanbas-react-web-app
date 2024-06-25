import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import assignmentsReducer from './Courses/Assignments/reducer';
import accountReducer from "./Account/reducer";
import quizzesReducer from "./Courses/Quizzes/quizzesReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignments: assignmentsReducer,
    accountReducer,
    quizzesReducer,
  },
});

export default store;