import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $api from "../http/axiosConfig";

function MainPage() {
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
