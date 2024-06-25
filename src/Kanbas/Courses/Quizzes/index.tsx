import QuizzesControls from "./QuizzesControls";
import QuizControlButtons from "./QuizControlButtons";
import { RxRocket } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setQuizzes, updateQuiz, updateNewQuiz } from "./quizzesReducer";
import * as client from "./client";


export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes, newQuiz } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
      };
    const saveQuiz = async (quiz: any) => {
        const status = await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };
    useEffect(() => {
        fetchQuizzes();
      }, [cid]);
    useEffect(() => {
        saveQuiz({...newQuiz, course: cid, title: `Quiz ${quizzes.length}`});
        dispatch(updateNewQuiz({...newQuiz, course: cid, title: `Quiz ${quizzes.length}`}));
    }, [cid]);
    return (
        <div id="wd-quizzes" className="ms-5 me-5">
            <QuizzesControls qid={newQuiz._id} cid={cid} />
            <ul id="wd-assignments" className="list-group rounded-0 ms-5 me-5">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <TiArrowSortedDown />
                    Quizzes
                    </div>
                    {quizzes.filter((q: any) => q._id !== "new").length === 0 ? 
                        <h5 className="ps-3 text-danger">Empty
                            {currentUser.role === "Faculty" || currentUser.role === "TA" ? "Click the '+ Quiz' button to add a quiz." : ""} </h5>
                        :
                        <ul className="wd-lessons list-group rounded-0">
                            {quizzes
                            .filter((quiz: any) => (quiz.course === cid && quiz._id !== "new"))
                            .map((quiz: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1 border-left-success">
                                    <div className="wd-flex-row-container">
                                        <RxRocket className="ms-3 mt-3 me-3 fs-2 text-success" />
                                        <div className="wd-flex-grow-1">
                                            <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`} className="cwd-assignment-link">
                                                {quiz.title}
                                            </Link>
                                            <br/>
                                            <strong>{(new Date(quiz.availableUntil) < new Date())  && "Closed"}</strong>
                                            <strong>{(new Date(quiz.availableFrom) <= new Date()) && (new Date() <= new Date(quiz.availableUntil))  && "Available"}</strong> 
                                            <strong>{(new Date(quiz.availableFrom) > new Date()) && "Not Available Until"}</strong> {(new Date(quiz.availableFrom) > new Date()) && 
                                                new Date(quiz.availableFrom).toDateString()} | <strong> Due</strong> {new Date(quiz.due).toDateString()} | {quiz.points ? quiz.points : 0} pts | {quiz.questions ? quiz.questions.length : 0} Questions
                                        </div>
                                        {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
                                            <QuizControlButtons quiz={quiz}/> : ""}
                                </div>
                                </li>
                            ))
                            }
                        </ul>
                    }
                </li>
            </ul>
        </div>
    );
}