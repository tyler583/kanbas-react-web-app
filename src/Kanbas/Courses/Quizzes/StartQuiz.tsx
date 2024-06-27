import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as client from "./client";

interface Answer {
    questionId: string;
    answer: string;
}

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<any>({});
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [score, setScore] = useState<number | null>(null);

    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        console.log("Retrieved quiz:", quiz);
        setQuiz(quiz[0]);
        const initialAnswers = quiz[0].questions.map((question: any) => ({
            questionId: question.id,
            answer: "",
        }));
        setAnswers(initialAnswers);
    };

    useEffect(() => {
        findQuiz(cid as string, qid as string);
    }, [cid, qid]);

    const handleAnswerChange = (questionId: string, answer: string) => {
        setAnswers((prevAnswers) =>
            prevAnswers.map((a) =>
                a.questionId === questionId ? { ...a, answer } : a
            )
        );
    };

    const submitQuiz = () => {
        let score = 0;
        answers.forEach((answer) => {
            const question = quiz.questions.find((q: any) => q.id === answer.questionId);
            if (question) {
                console.log(`Question: ${question.questionDescription}, Answer Given: ${answer.answer}, Correct Answer: ${question.correctAnswer}`);
                if (answer.answer === question.correctAnswer) {
                    score += question.questionPoints;
                }
            }
        });
        setScore(score);
    };

    return (
        <div>
            <h1>Quiz Preview</h1>
            <h2>{quiz.title}</h2>
            <div>
                {quiz.questions &&
                    quiz.questions.map((question: any, index: number) => (
                        <div key={index} className="mb-4">
                            <h4>{question.questionTitle}</h4>
                            <p dangerouslySetInnerHTML={{ __html: question.questionDescription }} />
                            {question.questionType === "Multiple Choice" && (
                                <div>
                                    {question.options.map((option: string, i: number) => (
                                        <div key={i}>
                                            <input
                                                type="radio"
                                                id={`${question.id}-${i}`}
                                                name={question.id}
                                                value={option}
                                                checked={answers.find((a) => a.questionId === question.id)?.answer === option}
                                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                            />
                                            <label htmlFor={`${question.id}-${i}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.questionType === "True/False" && (
                                <div>
                                    <input
                                        type="radio"
                                        id={`${question.id}-true`}
                                        name={question.id}
                                        value="True"
                                        checked={answers.find((a) => a.questionId === question.id)?.answer === "True"}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                    />
                                    <label htmlFor={`${question.id}-true`}>True</label><br />
                                    <input
                                        type="radio"
                                        id={`${question.id}-false`}
                                        name={question.id}
                                        value="False"
                                        checked={answers.find((a) => a.questionId === question.id)?.answer === "False"}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                    />
                                    <label htmlFor={`${question.id}-false`}>False</label>
                                </div>
                            )}
                            {question.questionType === "Fill" && (
                                <div>
                                    <input
                                        type="text"
                                        value={answers.find((a) => a.questionId === question.id)?.answer || ""}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
            </div>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editor`} className="btn btn-secondary mt-4 me-2">Edit Quiz</Link>
            <button className="btn btn-primary mt-4" onClick={submitQuiz}>Submit Quiz</button>
            {score !== null && <h4>Your Score: {score}</h4>}
        </div>
    );
}
