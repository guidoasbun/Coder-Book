import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
        //once a user is created in the DB, use a user ID to pull data
      .get("/api/users/5e7ae13044ec94570cbd10da")
      .then(({ data: users }) => {
        console.log(users);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h1>Hello Project 3!!!</h1>
    </div>
  );
};

export default App;
