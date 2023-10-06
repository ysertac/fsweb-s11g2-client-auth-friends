import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navBar = [
  { path: "/friends", text: "Friends" },
  { path: "/friends/add", text: "Add New Friend" },
];

const Header = () => {
  const { userLogout } = useContext(AuthContext);
  const { authUser } = useContext(AuthContext);
  const handleLogout = () => {
    userLogout();
  };

  return (
    <header className="flex items-center justify-center mx-auto border-b-4 mb-16 border-black">
      <h2 className="text-3xl font-black mr-24">Friends Database</h2>
      <nav className="my-6">
        {!authUser.username && (
          <NavLink
            exact
            className={(isActive) =>
              isActive
                ? " active mr-[10px] p-5 bg-blue-400 text-black rounded-2xl inline-block"
                : "mr-[10px] p-5 bg-black text-white rounded-2xl"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
        {navBar.map((link, i) => (
          <NavLink
            key={i}
            exact
            className={(isActive) =>
              isActive
                ? " active mr-[10px] p-5 bg-blue-400 text-black rounded-2xl"
                : "mr-[10px] p-5 bg-black text-white rounded-2xl"
            }
            to={link.path}
          >
            {link.text}
          </NavLink>
        ))}
        {authUser.username && (
          <button
            className="p-5 bg-black text-white rounded-2xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
