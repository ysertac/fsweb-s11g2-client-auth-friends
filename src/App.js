import "./App.css";
import { Route, Switch } from "react-router-dom";
import Loginn from "./pages/Loginn";
import FriendsList from "./pages/FriendsList";
import AuthContextProvider from "./context/AuthContext";
import Registerr from "./pages/Registerr";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import FriendDetails from "./pages/FriendDetails";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/login">
            <Loginn />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/add">
            <Registerr />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/:id">
            <FriendDetails />
          </PrivateRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
