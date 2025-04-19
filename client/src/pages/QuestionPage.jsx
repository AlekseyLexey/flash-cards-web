import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizQuestions from './quizQuestions';
import $api from '../http/axiosConfig';
import '../style/questionPage.css'

function QuestionPage({ theme }) {
  const [questions, setQuestions] = useState(null);
  const [themeInfo, setThemeInfo] = useState(null);
  const [answer, setAnswer] = useState('');
  // console.log(data)
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
   async function fetchingQuestions() {
    try{
      const {data} = await $api.get(`/themes/${id}`)
      setThemeInfo({theme_id: data.id, name: data.theme })
      setQuestions(data.theme_question)

    }
    catch(error){
      console.log(error)
    }
   }
   fetchingQuestions()
  }, [])

  console.log(questions)
  console.log(themeInfo)


  const handleClear = () => {
    setAnswer("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setAnswer(""); 
    }
  }

  const question = quizQuestions.find((el) => el.id === +id);

  if (!question) {
    return <div>404</div>;
  }

  return (
    <div className='container'>
      <h2>Тема: {theme}</h2>
      <div>{question.question}</div>
      <input
        type="text"
        className="input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='buttons' onClick={handleClear}>Send</button>
      <div>
          <button className='buttons' onClick={() => navigate(-1)}>Main page</button>
      </div>
    </div>
  );
}

export default QuestionPage;
