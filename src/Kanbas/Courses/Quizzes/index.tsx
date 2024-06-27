import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { setQuizzes, addQuiz, deleteQuiz, updateQuiz } from './reducer';
import * as client from "./client";
import QuizControls from "./QuizControls";
import { VscRocket } from "react-icons/vsc";
import QuizControlButtons from "./QuizControlButtons";


export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quizName, setQuizName] = useState("");
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
    }, [fetchQuizzes]);

    const createQuiz = async (quiz: any) => {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
    };

    const removeQuiz = async (quizId: string) => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    const saveQuiz = async (quiz: any) => {
        const status = await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };

    const handleAddQuiz = () => {
        if (cid) {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quizName,
                courseNumber: cid,
                quizType: "Graded Quiz",
                points: 100,
                assignmentGroup: "Quizzes",
                shuffleAnswers: true,
                timeLimit: true,
                minutes: "20",
                allowMultipleAttempts: false,
                allowedAttempts: 1,
                showCorrectAnswers: true,
                accessCode: "",
                oneQuestionAtATime: true,
                webcamRequired: false,
                lockQuestions: false,
                due: "",
                availableFrom: "",
                availableUntil: "",


                assignTo: "Everyone",
                status: "unpublished",
                requiredToViewResults: false,
                requireLockdownBrowser: false,
                viewResponses: true,
                attemptNumber: 0,
                
                questions: [],
                instructions: "",
                
            };
            createQuiz(newQuiz);
        }
    };
    const courseQuizzes = quizzes?.filter((quiz: any) => quiz.courseNumber === cid);

    const handleDeleteQuiz = (id: string) => {
        if (window.confirm('Are you sure you want to delete this quiz?')) {
            removeQuiz(id);
        }
    };

    return (
        <div id="wd-assignments">
            <QuizControls addQuiz={handleAddQuiz} /><br />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignment Quizzes
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0">
                        {courseQuizzes.map((quiz: any) => (
                            <li key={quiz._id} className="wd-assignment-list-item list-group-item vertical-rectangle">
                                <div className="wd-flex-row-container">
                                    <div className="icon-container">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <VscRocket className="me-3 fs-3" />
                                    </div>
                                    <div className="assignment-details">
                                        <a className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                                            {quiz.title}
                                        </a>
                                        <div>
                                            {(new Date(quiz.availableUntil) < new Date())  && "Closed"}
                                            {(new Date(quiz.availableFrom) <= new Date()) && 
                                            (new Date() <= new Date(quiz.availableUntil))  && "Available"}
                                            <strong>{(new Date(quiz.availableFrom) > new Date()) && 
                                            "Not Available Until"}</strong> {(new Date(quiz.availableFrom) > new Date()) && 
                                                new Date(quiz.availableFrom).toDateString()} | 
                                                Due {new Date(quiz.due).toDateString()} |  {quiz.points ? quiz.points : 0} pts | {quiz.questions ? quiz.questions.length : 0} Questions
                                        </div>
                                    </div>
                                    <div className="lesson-controls">
                                        <QuizControlButtons quiz={quiz} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}



