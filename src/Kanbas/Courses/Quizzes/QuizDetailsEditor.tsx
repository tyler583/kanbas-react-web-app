import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addQuiz, updateQuiz } from "./reducer";
import * as client from "./client";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuizDetailsEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const { quizzes, updatingQuiz, newQuiz } = useSelector((state: any) => state.quizzesReducer);

    const [currentQuiz, setCurrentQuiz] = useState(updatingQuiz || {});
    const [allowMultipleAttempts, setAllowMultipleAttempts] = useState(currentQuiz.allowMultipleAttempts || false);
    const [timeLimit, setTimeLimit] = useState(currentQuiz.timeLimit || false);
    const [instructions, setInstructions] = useState(currentQuiz.instructions || '');

    useEffect(() => {
        const findQuiz = async () => {
            const quiz = await client.findQuiz(cid as string, qid as string);
            if (quiz.length > 0) {
                setCurrentQuiz(quiz[0]);
                setInstructions(quiz[0].instructions || '');
                setAllowMultipleAttempts(quiz[0].allowMultipleAttempts);
                setTimeLimit(quiz[0].timeLimit);
            }
        };

        if (cid && qid) {
            findQuiz();
        }
    }, [cid, qid]);

    const handleInstructionsChange = (content: string) => {
        setInstructions(content);
        setCurrentQuiz({ ...currentQuiz, instructions: content });
    };

    const handleQuizTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentQuiz({ ...currentQuiz, quizType: event.target.value });
    };

    const handlePointsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentQuiz({ ...currentQuiz, points: event.target.value });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setCurrentQuiz({ ...currentQuiz, [name]: checked });
    };

    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentQuiz({ ...currentQuiz, minutes: event.target.value });
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setCurrentQuiz({ ...currentQuiz, [field]: event.target.value });
    };

    const saveQuiz = async () => {
        if (currentQuiz._id === "new") {
            const newQuiz = await client.createQuiz(cid as string, currentQuiz);
            dispatch(addQuiz(newQuiz));
        } else {
            await client.updateQuiz(currentQuiz);
            dispatch(updateQuiz(currentQuiz));
        }
    };

    const saveQuizPublish = async () => {
        const updatedQuiz = { ...currentQuiz, published: "published" };
        if (updatedQuiz._id === "new") {
            const newQuiz = await client.createQuiz(cid as string, updatedQuiz);
            dispatch(addQuiz(newQuiz));
        } else {
            await client.updateQuiz(updatedQuiz);
            dispatch(updateQuiz(updatedQuiz));
        }
    };


    return (
        <form className="mt-4">
            <h6>Title</h6>
            <input
                type="text"
                className="form-control"
                id="wd-quiz-name"
                value={currentQuiz.title || ''}
                onChange={(e) => setCurrentQuiz({ ...currentQuiz, title: e.target.value })}
            />
            <br />
            <label htmlFor="wd-quiz-instructions">Quiz Instructions:</label><br />
            <ReactQuill
                theme="snow"
                id="wd-quiz-instructions"
                className="form-control"
                value={instructions}
                onChange={handleInstructionsChange}
            />

            <br />

            <h6>Access Code (Optional)</h6>
            <input
                type="text"
                className="form-control"
                id="wd-quiz-accessCode"
                value={currentQuiz.accessCode || ''}
                onChange={(e) => setCurrentQuiz({ ...currentQuiz, accessCode: e.target.value })}
            />

            <div className="form-group mt-4 row">
                <div className="col-sm-4">
                    <label htmlFor="wd-quiz-type" className="me-4 col-form-label float-end">
                        Quiz Type
                    </label>
                </div>
                <div className="col-sm-7 w-25">
                    <select
                        className="form-select"
                        id="wd-quiz-type"
                        value={currentQuiz.quizType || 'graded quiz'}
                        onChange={handleQuizTypeChange}
                    >
                        <option value="graded quiz">Graded Quiz</option>
                        <option value="practice quiz">Practice Quiz</option>
                        <option value="graded survey">Graded Survey</option>
                        <option value="ungraded survey">Ungraded Survey</option>
                    </select>
                </div>
            </div>
            <div className="form-group mt-4 row">
                <div className="col-sm-4">
                    <label htmlFor="wd-quiz-points" className="me-4 col-form-label float-end">
                        Points
                    </label>
                </div>
                <div className="col-sm-7">
                    <input
                        type="number"
                        id="wd-quiz-points"
                        className="form-control w-25"
                        value={currentQuiz.points || ''}
                        onChange={handlePointsChange}
                    />
                </div>
            </div>
            <div className="form-group row mt-4">
                <div className="col-sm-4">
                    <label htmlFor="wd-quiz-details-options" className="me-4 col-form-label float-end">
                        Options
                    </label>
                </div>
                <div className="col-sm-7">
                    <input
                        id="wd-quiz-shuffle"
                        type="checkbox"
                        name="shuffleAnswers"
                        checked={currentQuiz.shuffleAnswers}
                        onChange={handleCheckboxChange}
                    />

                    <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label><br /><br />
                    <input
                        id="wd-quiz-time-limit"
                        type="checkbox"
                        name="timeLimit"
                        checked={currentQuiz.timeLimit}
                        onChange={handleCheckboxChange}
                    />


                    <label htmlFor="wd-quiz-time-limit" className="me-3">Time Limit</label>
                    <input
                        id="wd-quiz-minutes"
                        type="number"
                        className="input-sm"
                        value={currentQuiz.minutes || ''}
                        disabled={!timeLimit}
                        onChange={handleMinutesChange}
                    />
                    <label htmlFor="wd-quiz-minutes">Minutes</label><br /><br />



                    <input
                        id="wd-quiz-attempts"
                        type="checkbox"
                        name="multipleAttempts"
                        checked={currentQuiz.multipleAttempts}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wd-quiz-attempts">Allow Multiple Attempts</label><br /><br />


                    <input
                        id="wd-quiz-correctanswers"
                        type="checkbox"
                        name="showCorrectAnswers"
                        checked={currentQuiz.showCorrectAnswers}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wd-quiz-correctanswers">Show Correct Answers</label><br /><br />

                    <input
                        id="wd-quiz-oneQuestionAtATime"
                        type="checkbox"
                        name="oneQuestionAtATime"
                        checked={currentQuiz.oneQuestionAtATime}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wd-quiz-oneQuestionAtATime">One Question At A Time</label><br /><br />

                    <input
                        id="wd-quiz-webcamRequired"
                        type="checkbox"
                        name="webcamRequired"
                        checked={currentQuiz.webcamRequired}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wd-quiz-webcamRequired">Webcam Required</label><br /><br />


                    <input
                        id="wd-quiz-lockQuestions"
                        type="checkbox"
                        name="lockQuestions"
                        checked={currentQuiz.lockQuestions}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="wd-quiz-lockQuestions">Lock Questions After Answering</label><br /><br />




                </div>

            </div>




            <div className="row mb-3">
                <div className="col-auto align-self-start">
                    <label htmlFor="wd-submission-type" className="form-label">Assign</label>
                </div>
                <div className="col">
                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                    <input type="text" id="wd-assign-to" value="Everyone" className="form-control" />

                    <br />

                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input type="date" id="wd-due-date" className="form-control"
                        value={currentQuiz.due}
                        onChange={(e) => handleDateChange(e, 'due')}

                    />

                    <br />

                    <div className="d-flex">
                        <div className="col me-2">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input type="date" id="wd-available-from" className="form-control"
                                value={currentQuiz.availableFrom}
                                onChange={(e) => handleDateChange(e, 'availableFrom')}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                            <input type="date" id="wd-available-until" className="form-control"
                                value={currentQuiz.availableUntil}
                                onChange={(e) => handleDateChange(e, 'availableUntil')}
                            />
                        </div>
                    </div>
                </div>
            </div>







            <div className="float-end">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-light me-2">Cancel</Link>

                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} id="wd-quiz-save-publsh" className="btn btn-danger me-2" onClick={saveQuizPublish}>Save & Publish</Link>

                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`} id="wd-quiz-save" className="btn btn-danger me-2" onClick={saveQuiz}>Save</Link>

            </div>
            <br /><br />
        </form>
    );
}
