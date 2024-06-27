import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";
import "./styles.css";
import { FcCancel } from "react-icons/fc";
import GreenCheckmark from "../Modules/GreenCheckmark";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionEditor from "./QuizQuestionEditor";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<any>({});
    const [activeTab, setActiveTab] = useState('details');

    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        setQuiz(quiz[0]);
    };

    useEffect(() => {
        findQuiz(cid as string, qid as string);
    }, [cid, qid]);

    return (
        <div id="wd-quiz-editor" className="m-5">
            <div key={quiz._id}>
                <div className="float-end">
                    <strong className="fs-5 me-3">Points {quiz.points}</strong>
                    {quiz.published === "unpublished" ? <FcCancel className="fs-5 mb-2 me-1" /> : <GreenCheckmark />}
                    <span className="fs-5">{quiz.published === "unpublished" ? "Not Published" : "Published"}</span>
                </div>
                <br />
                <br />
                <hr />
            </div>

            <div>
                <ul className="nav nav-tabs mt-5" id="wd-quiz-editor-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
                            id="details-tab"
                            data-bs-toggle="tab"
                            type="button"
                            role="tab"
                            aria-controls="details"
                            aria-selected={activeTab === 'details'}
                            onClick={() => setActiveTab('details')}
                        >
                            Details
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
                            id="questions-tab"
                            data-bs-toggle="tab"
                            type="button"
                            role="tab"
                            aria-controls="questions"
                            aria-selected={activeTab === 'questions'}
                            onClick={() => setActiveTab('questions')}
                        >
                            Questions
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="wd-quiz-editor-tabs-content">
                    <div className={`tab-pane fade ${activeTab === 'details' ? 'show active' : ''}`} id="details" role="tabpanel" aria-labelledby="details-tab">
                        <QuizDetailsEditor />
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'questions' ? 'show active' : ''}`} id="questions" role="tabpanel" aria-labelledby="questions-tab">
                        <QuizQuestionEditor />
                    </div>
                </div>
            </div>
        </div>
    );
}
