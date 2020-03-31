import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import UserContext from "./utils/userContext";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";
import Chuckticker from "./components/chuckticker"

const App = () => {
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    password: "",
    user: {},
  });

  userState.handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value });
  };

  userState.handleRegisterUser = (event) => {
    event.preventDefault();
    const user = {
      username: userState.username,
      email: userState.email,
      password: userState.password,
    };
    setUserState({
      ...userState,
      user,
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <UserContext.Provider value={userState}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Sandbox />
            </Switch>
          </div>
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
