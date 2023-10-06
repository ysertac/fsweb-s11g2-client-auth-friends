import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  username: "workintech",
  password: "wecandoit",
};

const Loginn = () => {
  const [loginFormData, setLoginFormData] = useState(initialValues);
  const { userLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(loginFormData);
    setLoginFormData(initialValues);
  };

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Client Auth Projesi: Friends</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              className="mt-1 px-3 py-2 mx-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
              name="username"
              value={loginFormData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              className="mt-1 px-3 py-2 mx-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
              name="password"
              type="password"
              value={loginFormData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button className="bg-purple-300 px-4 py-2 mt-3 rounded-xl">
            GİRİŞ
          </button>
        </div>
      </form>
    </>
  );
};
export default Loginn;
