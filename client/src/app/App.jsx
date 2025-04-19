import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import QuestionPage from '../pages/QuestionPage';

function App() {
  return (
      <Routes>
        <Route path="/quiz" element={<MainPage />} />
        <Route path="/quiz/:id" element={<QuestionPage />} />
      </Routes>
  );
}

export default App;
