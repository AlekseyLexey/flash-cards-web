import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $api from "../http/axiosConfig";

function MainPage({ userData }) {
  const [topics, setTopics] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchingThemes() {
      setLoading(false);

      try {
        const { data } = await $api.get("themes");
        setTopics(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    }

    fetchingThemes();
  }, []);

  if (!isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Link to={`/point/${userData.id}`}>Посмотреть былые провалы</Link>
      {topics.map((el, index) => {
        return (
          <div key={index}>
            <Link to={`/quiz/${el.id}`}>
              <div>{el.theme}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
