import $api from "../../../http/axiosConfig";

function ButtonLogout({ setAuth }) {
  const handleClick = async () => {
    try {
      await $api.post("/logout");
      setAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button style={{ marginBottom: 20 }} onClick={handleClick}>
        Выйти из профиля
      </button>
    </div>
  );
}

export default ButtonLogout;
