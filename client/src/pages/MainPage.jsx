import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import quizTopics from "./quizTopics";

function MainPage({userData}) {
  const [topics, setTopics] = useState(quizTopics);
  return (
    <div>
      <Link to={`/point/${userData.id}`}>
        <div>Посмотреть былые результаты</div>
      </Link>
      {topics.map((el, index) => {
        return (
          <div key={index}>
            <Link to={`/quiz/${el.id}`}>
              <div>{el.topic}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
