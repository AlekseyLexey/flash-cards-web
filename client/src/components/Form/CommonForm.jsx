import { useEffect, useState } from "react";

function CommonForm({ initialFormData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Login
          <input
            value={formData.login}
            onChange={handleChange}
            type="text"
            name="login"
            placeholder="Login"
          />
        </label>
        <label>
          Email
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        {formData.newPassword !== undefined && (
          <label>
            New Password
            <input
              value={formData.newPassword}
              onChange={handleChange}
              type="password"
              name="newPassword"
              placeholder="New Password"
            />
          </label>
        )}

        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default CommonForm;
