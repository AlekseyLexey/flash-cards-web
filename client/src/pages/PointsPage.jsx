import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import $api from '../http/axiosConfig'

function PointPage(){
    const [points, setPoints] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const userId = id ;

                const response = await $api.get(`/points/${userId}`);
                setPoints(response.data);
            } catch (err) {
                console.log(err)
            } 
        };

        fetchPoints();
    }, [id]);

    console.log(points)

    return (
        <div>
            <h2>Points for User {id}</h2>
            <ul>
                {points.map((point, index) => (
                    <li key={index}>
                        <p>`${point}`</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PointPage