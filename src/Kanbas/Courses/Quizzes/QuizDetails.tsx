import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function QuizDetails () {

    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<any>({});
    

    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        setQuiz(quiz[0]);
    };    
    useEffect(() => {
        findQuiz(cid as string, qid as string);
      }, [cid, qid]);
    return (
      <div>
            <div>
                <div className="row">
                    <div className="col text-center">
                        <Link className="btn btn-lg btn-secondary me-1"
                              to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/start`}>Preview</Link>
                        <Link className="btn btn-lg btn-secondary me-1"
                            to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editor`}><FaPencil className="mb-2"/> Edit</Link>
                    </div>
                </div>
                <hr />
            </div>
        <h1>{quiz.title}</h1>
            <div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Quiz Type</div>
                    <div className="col-5 text-start">{quiz.quizType}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Points</div>
                    <div className="col-5 text-start">{quiz.points}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Assignment Group</div>
                    <div className="col-5 text-start">{quiz.assignmentGroup}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Shuffle Answers</div>
                    <div className="col-5 text-start">{quiz.shuffleAnswers ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Time Limit</div>
                    <div className="col-5 text-start">{quiz.minutes} Minutes</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Multiple Attempts</div>
                    <div className="col-5 text-start">{quiz.allowMultipleAttempts ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">How Many Attempts</div>
                    <div className="col-5 text-start">{quiz.allowedAttempts}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">View Responses</div>
                    <div className="col-5 text-start">{quiz.viewResponses ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Show Correct Answers</div>
                    <div className="col-5 text-start">{quiz.showCorrectAnswers ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Access Code</div>
                    <div className="col-5 text-start">{quiz.accessCode}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">One Question at a Time</div>
                    <div className="col-5 text-start">{quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Webcam Required</div>
                    <div className="col-5 text-start">{quiz.webcamRequired ? "Yes" : "No"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Lock Questions After Answering</div>
                    <div className="col-5 text-start">{quiz.lockQuestions ? "Yes" : "No"}</div>
                </div>
            <br />
            </div> 
            <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>Due</th><th>For</th><th>Available From</th><th>Until</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{quiz.due}</td><td>{quiz.assignTo}</td><td>{quiz.availableFrom}</td><td>{quiz.availableUntil}</td>
                </tr>
            </tbody>
        </table><br />

        <div className="row">
            <div className="col text-center">
                <Link className="btn btn-large btn-danger mb-3" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/start`}>Start Quiz</Link>
            </div>
        </div>

      </div>
    );
}