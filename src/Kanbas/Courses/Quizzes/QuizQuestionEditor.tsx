import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { setQuestions, updateQuiz } from "./reducer";
import * as client from "./client";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Question {
    id?: string;
    questionType: string;
    questionTitle: string;
    questionDescription: string;
    questionPoints: number;
    options?: string[];
    correctAnswer?: string;
}

interface Quiz {
    _id: string;
    title: string;
    courseNumber: string;
    questions: Question[];
    points: number;
}

export default function QuizQuestionsEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const { questions } = useSelector((state: any) => state.quizzesReducer);
    const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
    const [newQuestion, setNewQuestion] = useState<Question>({
        questionType: "Multiple Choice",
        questionTitle: "",
        questionDescription: "",
        questionPoints: 0,
        options: [],
        correctAnswer: "",
    });

    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        if (quiz) {
            setCurrentQuiz(quiz[0]);
            dispatch(setQuestions(quiz[0].questions || []));
        } else {
            console.error('Quiz not found');
        }
    };

    useEffect(() => {
        findQuiz(cid as string, qid as string);
    }, [cid, qid, dispatch]);

    const handleQuestionChange = (index: number, field: string, value: any) => {
        const updatedQuestions = questions.map((question: Question, i: number) =>
            i === index ? { ...question, [field]: value } : question
        );
        dispatch(setQuestions(updatedQuestions));
    };

    const addNewQuestion = () => {
        const questionWithId = { ...newQuestion, id: new Date().getTime().toString() };
        dispatch(setQuestions([...questions, questionWithId]));
        setNewQuestion({
            questionType: "Multiple Choice",
            questionTitle: "",
            questionDescription: "",
            questionPoints: 0,
            options: [],
            correctAnswer: "",
        });
    };

    const saveQuestions = async () => {
        if (currentQuiz && currentQuiz._id) {
            const updatedQuiz = { ...currentQuiz, questions };
            console.log('Saving updated quiz:', updatedQuiz);
            try {
                const response = await client.updateQuiz(updatedQuiz); 
                console.log('Response:', response);
                dispatch(updateQuiz(updatedQuiz));
                console.log('Quiz questions saved successfully');
            } catch (error) {
                console.error('Error saving quiz questions:', error);
            }
        } else {
            console.error('Current quiz is undefined or missing _id');
        }
    };

    const handleTypeChange = (index: number, value: string) => {
        handleQuestionChange(index, 'questionType', value);
    };

    return (
        <div id="wd-quiz-editor-questions" className="m-5">
            <h3>Quiz Questions Editor</h3>
            <hr />
            <div>
                <h5>Questions</h5>
                {questions.length === 0 && <p>No questions added yet.</p>}
                {questions.map((question: Question, index: number) => (
                    <div key={index} className="question-item mt-3">
                        <select
                            value={question.questionType}
                            onChange={(e) => handleTypeChange(index, e.target.value)}
                            className="form-select"
                        >
                            <option value="Multiple Choice">Multiple Choice</option>
                            <option value="True/False">True/False</option>
                            <option value="Fill">Fill in the Blanks</option>
                        </select>
                        <input
                            type="text"
                            value={question.questionTitle}
                            onChange={(e) => handleQuestionChange(index, 'questionTitle', e.target.value)}
                            placeholder="Title"
                            className="form-control mt-2"
                        />
                        <ReactQuill
                            theme="snow"
                            value={question.questionDescription}
                            onChange={(value) => handleQuestionChange(index, 'questionDescription', value)}
                        />
                        <input
                            type="number"
                            value={question.questionPoints}
                            onChange={(e) => handleQuestionChange(index, 'questionPoints', parseInt(e.target.value, 10))}
                            placeholder="Points"
                            className="form-control mt-2"
                        />
                        {question.questionType === "Multiple Choice" && (
                            <div>
                                <textarea
                                    value={question.options?.join('\n')}
                                    onChange={(e) => handleQuestionChange(index, 'options', e.target.value.split('\n'))}
                                    placeholder="Enter options, one per line"
                                    className="form-control mt-2"
                                />
                                 <input
                                    type="text"
                                    value={question.correctAnswer}
                                    onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                                    placeholder="Correct Answer"
                                    className="form-control mt-2"
                                />


                            </div>
                        )}

                        {question.questionType === "True/False" && (
                            <div>
                                <select
                                    value={question.correctAnswer?.toString()}
                                    onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                                    className="form-select mt-2"
                                >
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                            </div>
                        )}
                        {question.questionType === "Fill" && (
                            <div>
                                <input
                                    type="text"
                                    value={question.correctAnswer}
                                    onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                                    placeholder="Correct Answer"
                                    className="form-control mt-2"
                                />
                            </div>
                        )}
                    </div>
                ))}
                <div className="new-question mt-4">
                    <button className="btn btn-primary mt-2" onClick={addNewQuestion}>Add New Question</button>
                </div>
                <div className="float-end mt-4">
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-light me-2">Cancel</Link>
                    <button className="btn btn-danger" type="button" onClick={saveQuestions}>Save</button>
                </div>
            </div>
        </div>
    );
}

