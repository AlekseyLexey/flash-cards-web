import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $api from "../http/axiosConfig";
import "../style/pointPage.css";
import ButtonToMain from "../components/ui/Buttons/ButtonToMain";

function PointPage() {
  const [points, setPoints] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const userId = id;

        const response = await $api.get(`/point/${userId}`);
        setPoints(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPoints();
  }, [id]);

  return (
    <div className="pointsDiv">
      <ButtonToMain />
      <h2>Очки пользователя</h2>
      <ul>
        {points.map((point, index) => (
          <li className="liPoint" key={index}>
            <p className="titleThemeOfPoints">{point.theme_point.theme}</p>
            <p className="points">Всего набрано очков : {point.total_points}</p>
            <p className="points">
              Отгадано с первого раза : {point.first_time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointPage;
