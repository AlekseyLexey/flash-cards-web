import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizTopics from './quizTopics';

function MainPage() {
  const [topics, setTopics] = useState(quizTopics);
  return (
    <div>
      {topics.map((el, index) => {
        return (
          <div key={index}>
            <div>{el.topic}</div>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
