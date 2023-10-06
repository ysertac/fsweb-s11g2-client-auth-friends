import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navBar = [
  { path: "/friends", text: "Friends" },
  { path: "/friends/register", text: "Add New Friend" },
];

const Header = () => {
  const { userLogout } = useContext(AuthContext);
  const { authUser } = useContext(AuthContext);
  const handleLogout = () => {
    userLogout();
  };

  return (
    <header>
      <h2>Friends Database</h2>
      <nav className="my-6">
        {!authUser.username && (
          <NavLink
            exact
            className={(isActive) =>
              isActive
                ? " active mx-5 p-5 bg-blue-400 text-black rounded-2xl"
                : "mx-5 p-5 bg-black text-white rounded-2xl"
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
                ? " active mx-5 p-5 bg-blue-400 text-black rounded-2xl"
                : "mx-5 p-5 bg-black text-white rounded-2xl"
            }
            to={link.path}
          >
            {link.text}
          </NavLink>
        ))}
        {authUser.username && (
          <button
            className="mx-5 p-5 bg-black text-white rounded-2xl"
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
