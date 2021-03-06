import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';
import { Wrapper, Title, Score, StyledButton } from './App.styles';

const TOTAL_QUESTIONS = 10;
const DIFFICULTY = Difficulty.EASY;

export type AnswerObject = {
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
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const next: number = number + 1;
    if (next === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  };
  return (
    <>
      <Wrapper>
        <Title>Typescript Quiz Game</Title>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <StyledButton type="button" onClick={startQuiz}>
            Start
          </StyledButton>
        ) : null}
        <Score>Score: {score}</Score>
        {loading && <p>Loading Question...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[number] : null}
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <StyledButton type="button" onClick={nextQuestion}>
            Next Question
          </StyledButton>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
