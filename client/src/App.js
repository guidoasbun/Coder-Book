import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";
import Chuckticker from "./components/chuckticker"


const App = () => {


  return (
    <div>

      <Navbar />

      <Sandbox />

    </div>
  );
};

export default App;
















// const App = () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         axios
            //once a user is created in the DB, use a user ID to pull data
    //         .get("/api/postings")
    //         .then(({ data: postings }) => {
    //             console.log(postings);
    //         })
    //         .catch((e) => console.error(e));
    // }, []);
