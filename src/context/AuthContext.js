import axios from "axios";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const [authUser, setAuthUser] = useLocalStorage("s11g2", {});
  const userLogin = (loginFormData) => {
    axios
      .post("http://localhost:9000/api/login", loginFormData)
      .then((res) => {
        setAuthUser(res.data);
        history.push("/friends");
      })
      .catch((err) => console.log(err.response.data.error));
  };

  const userLogout = () => {
    axios
      .post("http://localhost:9000/api/logout", null, {
        headers: { authorization: authUser.token },
      })
      .then((res) => {
        setAuthUser({});
      })
      .catch((err) => console.log(err.response.data.error));
  };
  return (
    <>
      <AuthContext.Provider value={{ userLogin, authUser, userLogout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const AuthContext = createContext();
export default AuthContextProvider;
