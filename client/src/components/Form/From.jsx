import { useState } from "react";
import "./form.css";
import $api from "../../http/axiosConfig";

import ButtonToggle from "../ui/Buttons/ButtonToggle";
import CommonForm from "./CommonForm";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

function Form({ setAuth }) {
  const [isRegistration, setRegistration] = useState(true);

  const handleSubmit = async (formData) => {
    const url = isRegistration ? "/registration" : "/login";
    const res = await $api.post(url, formData);

    localStorage.setItem("token", res.data.accessToken);
    setAuth(true);
  };

  const titleText = isRegistration ? "(Регистрация)" : "(Вход в систему)";
  const btnText = isRegistration ? "Зарегистрироваться" : "Войти";

  return (
    <div>
      {
        <ButtonToggle
          isRegistration={isRegistration}
          setRegistration={setRegistration}
        />
      }
      <div>{titleText}</div>
      <CommonForm
        initialFormData={initialFormData}
        onSubmit={handleSubmit}
        buttonText={btnText}
      />
    </div>
  );
}

export default Form;
