import React from 'react';
import { AnswerObject } from '../App';
import { CardWrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | null;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <CardWrapper>
      <p>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            clicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button
              type="button"
              value={answer}
              disabled={!!userAnswer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </CardWrapper>
  );
};

export default QuestionCard;
