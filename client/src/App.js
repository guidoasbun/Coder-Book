import React, { useEffect, useState } from "react";
import axios from "axios";
import Sandbox from "./components/sandbox";
import Chuckticker from "./components/chuckticker"


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
<<<<<<< HEAD

      <Navbar />
      <Chuckticker />
      <Sandbox />
=======
      < Ticker >
        {({ index }) => (
          <>
            <h1 style={{ whiteSpace: 'nowrap' }}><img src={data.icon_url} alt="" />{data.value}{index}</h1>

          </>
        )}
      </Ticker >
      {/* <Sandbox /> */}

      <h1>Hello Project 3!!!</h1>

>>>>>>> b065efaa24999a610e717e3fef29003270f63740

    </div>
  );
};

export default App;
