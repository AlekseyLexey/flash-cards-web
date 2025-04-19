import { useState, useEffect } from "react";
import authReq from "../services/apiAuth";

import Form from "../components/Form/From";
import MainPage from "../pages/MainPage";
import { Route, Routes, Navigate } from "react-router-dom";
import QuestionPage from "../pages/QuestionPage";

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

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route
            path="/quiz"
            element={isAuth ? <MainPage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/quiz/:id"
            element={isAuth ? <QuestionPage /> : <Navigate to="/auth" />}
          />
        </>
      ) : (
        <Route path="/auth" element={<Form setAuth={setAuth} />} />
      )}
      <Route path="*" element={<Navigate to={isAuth ? "/quiz" : "/auth"} />} />
    </Routes>
  );
}

export default App;
