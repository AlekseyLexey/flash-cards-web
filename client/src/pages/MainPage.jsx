import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import quizTopics from './quizTopics';
import '../style/mainPage.css'

function MainPage() {
  const [topics, setTopics] = useState(quizTopics);
  return (
    <div className='container'>
      <h1>Flashcards</h1>
      {topics.map((el, index) => {
        return (
          <div key={index}>
            <Link to={`/quiz/${el.id}`}>
              <div className='topics'>{el.topic}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
