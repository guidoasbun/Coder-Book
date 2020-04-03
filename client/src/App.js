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
      .then(( data ) => {
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
        // console.log(data)
        // localStorage.setItem("name", data.name);
        // localStorage.setItem("username", data.username);
        // localStorage.setItem("id", data._id);
        // localStorage.setItem("jwt", data.token);
        // window.location = "/home";
      });
    // setUserState({
    //   ...userState,
    //   user: "",
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <UserContext.Provider value={userState}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <h1>This is the Welcome screen</h1>
              <h1>Log in or sign up to access site</h1>
            </Route>
            <Route path="/home">
              <Sandbox />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

// const [data, setData] = useState([])
// useEffect(() => {
//     axios
//once a user is created in the DB, use a user ID to pull data
//         .get("/api/postings")
//         .then(({ data: postings }) => {
//             console.log(postings);
//         })
//         .catch((e) => console.error(e));
// }, []);
