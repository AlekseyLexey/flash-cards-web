import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizQuestions from './quizQuestions';

function QuestionPage() {
const {id} = useParams();
const question = quizQuestions.find((el) => el.id === +id)

if (!question) {
  return <div>404</div>
}

return(
  <div>
    <div>{question.question}</div>
  </div>
)

}

export default QuestionPage;