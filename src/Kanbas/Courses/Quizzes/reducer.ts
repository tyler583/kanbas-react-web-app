import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
    updatingQuiz: {},
    questions: [],
    updatingQuestion: {},
  };
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz}) => {
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        name: quiz.name,
        course: quiz.courseNumber,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes= state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((m: any) =>
        m._id === quizId ? { ...m, editing: true } : m
      ) as any;
    },
    setQuestions: (state, action) => {
        state.questions = action.payload;
      },
      setQuestion: (state, { payload: question }) => {
        state.updatingQuestion = question;
      },
    },
  });
  
  export const { addQuiz, deleteQuiz, updateQuiz, setQuizzes, setQuestions, setQuestion } = quizzesSlice.actions;
  export default quizzesSlice.reducer;