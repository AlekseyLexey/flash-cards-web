import React from "react";

const ButtonToggle = React.memo(({ isRegistration, setRegistration }) => {
  return (
    <div>
      {isRegistration ? (
        <>
          <button onClick={() => setRegistration(false)}>Войти</button>
        </>
      ) : (
        <>
          <button onClick={() => setRegistration(true)}>Регистрация</button>
        </>
      )}
    </div>
  );
});

export default ButtonToggle;
