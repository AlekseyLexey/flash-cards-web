import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizQuestions from "./quizQuestions";
import $api from "../http/axiosConfig";

function QuestionPage() {
  const [questions, setQuestions] = useState(null);
  const [themeInfo, setThemeInfo] = useState(null);
  const [answer, setAnswer] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchingQuestions() {
      try {
        const { data } = await $api.get(`/themes/${id}`);
        setThemeInfo({ theme_id: data.id, name: data.theme });
        setQuestions(data.theme_question);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingQuestions();
  }, []);

  console.log(questions);
  console.log(themeInfo);

  const handleClear = () => {
    setAnswer("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setAnswer("");
    }
  };

  const question = quizQuestions.find((el) => el.id === +id);

  return (
    <div>
      <h2>Тема: {themeInfo?.name}</h2>
      <div>{question.question}</div>
      <input
        type="text"
        className="input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClear}>Send</button>
      <div>
        <button onClick={() => navigate(-1)}>Main page</button>
      </div>
    </div>
  );
}

export default QuestionPage;
