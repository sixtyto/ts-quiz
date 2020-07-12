import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;
const DIFFICULTY = Difficulty.EASY;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, DIFFICULTY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div>
      <h1>Typescript Quiz Game</h1>
      <button onClick={startQuiz}>Start</button>
      <p>Score: {score}</p>
      <p>Loading Question...</p>
      {/* <QuestionCard
        question={questions[number]}
        answers={questions[number]}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : null}
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default App;
