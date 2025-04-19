import { useState, useEffect } from "react";
import authReq from "../services/apiAuth";

import Form from "../components/Form/From";
import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import QuestionPage from '../pages/QuestionPage';
import PointPage from "../pages/PointsPage";

function App() {
  const [userData, setUserData] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const data = await authReq();
        setAuth(true);
        setUserData(data.user);
      } catch {
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (  <Routes>
    <Route path="/quiz" element={<MainPage />} />
    <Route path="/quiz/:id" element={<QuestionPage />} />
    <Route path="/point/:id" element={<PointPage />} />
  </Routes>)
}
// return <>{!isAuth ? <Form setAuth={setAuth} /> : <MainPage />}</>;


export default App;
