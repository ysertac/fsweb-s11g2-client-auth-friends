import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Registerr = () => {
  const [addFormData, setAddFormData] = useState({});
  const { addFriend } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend(addFormData);
  };

  const handleChange = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              className="mt-1 px-3 py-2 mx-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
              name="name"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              className="mt-1 px-3 py-2 mx-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
              name="age"
              type="number"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              className="mt-1 px-3 py-2 mx-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
              name="email"
              type="email"
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

export default Registerr;
