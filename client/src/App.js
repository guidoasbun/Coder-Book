import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";
import Chuckticker from "./components/chuckticker";

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      //once a user is created in the DB, use a user ID to pull data
      .get("/api/users/5e7bb027a5c0ba11807b5ae3")
      .then(({ data: users }) => {
        console.log(users);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>

      <Navbar />
      <Chuckticker />
      {/*<Sandbox />*/}

      <Sandbox />

    </div>
  );
};

export default App;
