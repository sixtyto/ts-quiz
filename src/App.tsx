import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div>
      <h1>Typescript Quiz Game</h1>
      <button onClick={startQuiz}>Start</button>
      <p>Score:</p>
      <p>Loading Question...</p>
      <QuestionCard />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default App;
