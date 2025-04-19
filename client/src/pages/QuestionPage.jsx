import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizQuestions from './quizQuestions';

function QuestionPage({ theme }) {
  const { id } = useParams();
  const question = quizQuestions.find((el) => el.id === +id);

  if (!question) {
    return <div>404</div>;
  }

  return (
    <div>
      <h2>Тема: {theme}</h2>
      <div>{question.question}</div>
    </div>
  );
}

export default QuestionPage;
