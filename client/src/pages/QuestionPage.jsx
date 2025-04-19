import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $api from "../http/axiosConfig";
import ButtonToMain from "../components/ui/Buttons/ButtonToMain";

const POINT = 5;

function QuestionPage({ user_id }) {
  const [questions, setQuestions] = useState(null);
  const [themeInfo, setThemeInfo] = useState(null);
  const [answer, setAnswer] = useState("");
  const [questionCounter, setQuestionCounter] = useState(0);
  const [result, setResult] = useState({
    user_id,
    total_points: 0,
    first_time: 0,
    theme_id: null,
  });
  const [isDone, setDone] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchingQuestions() {
      try {
        const { data } = await $api.get(`/themes/${id}`);
        setResult((prev) => {
          return { ...prev, theme_id: data.id };
        });
        setThemeInfo({ name: data.theme });
        setQuestions(data.theme_question);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingQuestions();
  }, []);

  useEffect(() => {
    async function fetchingPoints() {
      try {
        if (isDone) {
          await $api.post(`/point`, result);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchingPoints();
  }, [isDone]);

  const handleCheckAnswer = () => {
    const currentQuestion = questions[questionCounter].answer;

    if (currentQuestion.toLowerCase() == answer.toLowerCase()) {
      setResult((prev) => {
        return {
          ...prev,
          total_points: prev.total_points + POINT,
          first_time: prev.first_time + 1,
        };
      });
    }
    setQuestionCounter((prevCounter) => prevCounter + 1);
    setAnswer("");
    if (questionCounter + 1 === questions.length) {
      setDone(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCheckAnswer();
    }
  };

  const content = !isDone ? (
    <>
      <h2>Тема: {themeInfo?.name}</h2>
      <div>{questions ? questions[questionCounter].question : "Загрузка"}</div>
      <input
        type="text"
        className="input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleCheckAnswer}>Send</button>
    </>
  ) : (
    <>Вы прошли QUIZ ваш счет: {result.total_points} очков</>
  );

  return (
    <div>
      {content}
      <div>
        <ButtonToMain />
      </div>
    </div>
  );
}

export default QuestionPage;
