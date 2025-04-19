import { useNavigate } from "react-router-dom";

function ButtonToMain() {
  const navigate = useNavigate();
  return (
    <button className="buttons" onClick={() => navigate("/quiz")}>
      На главную
    </button>
  );
}

export default ButtonToMain;
