import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = ({ children, ...rest }) => {
  const { authUser } = useContext(AuthContext);
  const isLoggedIn = authUser.token ? true : false;
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
