import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("/api/users")
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
