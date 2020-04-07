import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import UserContext from "./utils/userContext";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";
import Welcome from "./components/welcome"


const App = () => {
  const [userState, setUserState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    user: {},
  });

  userState.handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value });
  };

  userState.handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("api/users/login", {
        username: userState.username,
        password: userState.password,
      })
      .then(({ data }) => {
        localStorage.setItem("name", data.name);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data._id);
        localStorage.setItem("jwt", data.token);
        window.location = "/home";
        console.log(data);
      });
  };

  userState.handleRegisterUser = (event) => {
    event.preventDefault();
    const user = {
      name: userState.name,
      username: userState.username,
      email: userState.email,
      password: userState.password,
    };
    axios
      .post("/api/users/register", {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((data) => {
        axios
          .post("api/users/login", {
            username: userState.username,
            password: userState.password,
          })
          .then(({ data }) => {
            localStorage.setItem("name", data.name);
            localStorage.setItem("username", data.username);
            localStorage.setItem("id", data._id);
            localStorage.setItem("jwt", data.token);
            window.location = "/home";
            console.log(data);
          });

      });

  };

  return (
    <UserContext.Provider value={userState}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route path="/home">
              <Sandbox />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </UserContext.Provider >
  );
};

export default App;

