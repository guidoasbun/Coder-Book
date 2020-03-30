import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sandbox from "./components/sandbox";
import Chuckticker from "./components/chuckticker";
import NewsArea from "./components/NewsArea";

const App = () => {
  // const [data, setData] = useState([]);

  return (
    <div>
      <Navbar />
      <Chuckticker />
      <NewsArea />
      {/*<Sandbox />*/}
    </div>
  );
};

export default App;
