import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";

const App = () => {
  useEffect(() => {
    axios
      //once a user is created in the DB, use a user ID to pull data
      .get("/api/users/5e7bb027a5c0ba11807b5ae3")
      .then(({ data: users }) => {
        console.log(users);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random")
      .then(({ data: facts }) => {
        console.log(facts.value)
      })
      .catch((e) => console.log(e))
  })

  return (
    <div>

      <Navbar />
      <Sandbox />

      <h1>Hello Project 3!!!</h1>
    </div>
  );
};

export default App;
