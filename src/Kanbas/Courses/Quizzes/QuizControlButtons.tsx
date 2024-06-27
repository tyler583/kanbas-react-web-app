import { IoEllipsisVertical } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteQuiz, updateQuiz } from "./reducer";
import { useState } from "react";
import * as client from "./client";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function QuizControlButtons({ quiz }: { quiz: any }) {
    const [stat, setStat] = useState(null);
    const dispatch = useDispatch();

    const removeQuiz = async (quizId: string) => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };
    const saveQuiz = async (quiz: any) => {
        const published = await client.updateQuiz(quiz);
        setStat(published);
        dispatch(updateQuiz(quiz));
    };
    return (
        <div className="float-end">
            <div className="dropdown d-inline me-1 float-end">
                <IoEllipsisVertical id="wd-quiz-context-btn" className="fs-4 ms-2" data-bs-toggle="dropdown" />
                <ul className="dropdown-menu">
                    <li>
                        <Link id="wd-quiz-edit-btn" className="dropdown-item" to={`/Kanbas/Courses/${quiz.courseNumber}/Quizzes/${quiz._id}`}>
                            <FaPencil className="text-primary" /> Edit
                        </Link>
                    </li>
                    <li>
                        <Link id="wd-quiz-delete-btn" className="dropdown-item" onClick={() => removeQuiz(quiz._id)}
                            to={`/Kanbas/Courses/${quiz.courseNumber}/Quizzes`}>
                            <FaTrash className="text-danger" /> Delete
                        </Link>
                    </li>
                    <li>
                        <Link id="wd-quiz-publish-btn" className="dropdown-item"
                            onClick={() => saveQuiz({ ...quiz, published: quiz.published === "unpublished" ? "published" : "unpublished" })}
                            to={`/Kanbas/Courses/${quiz.courseNumber}/Quizzes`} >
                            {quiz.published === "unpublished" ?
                                <GreenCheckmark /> : <FcCancel />} {quiz.published === "unpublished" ? "Publish" : "Unpublish"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="float-end">

                {quiz.published === "published" ? <GreenCheckmark /> : <FcCancel />}

            </div>
        </div>
    );
}