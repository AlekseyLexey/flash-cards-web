import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import $api from '../http/axiosConfig'
import '../style/pointPage.css';


function PointPage(){
    const [points, setPoints] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const userId = id ;

                const response = await $api.get(`/point/${userId}`);
                setPoints(response.data);
            } catch (err) {
                console.log(err)
            } 
        };

        fetchPoints();
    }, [id]);

    console.log(points)

    return (
        <div className='pointsDiv'>
            <button className='battonPoint' onClick={() => navigate('/quiz')}>На главную</button>
            <h2>Очки пользователя</h2>
            <ul>
                {points.map((point, index) => (
                    <li className='liPoint' key={index}>
                        <p className='titleThemeOfPoints'>{point.theme_point.theme}</p>
                        <p className='points'>Всего набрано очков : {point.total_points}</p>
                        <p className='points'>Отгадано с первого раза : {point.first_time}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default PointPage