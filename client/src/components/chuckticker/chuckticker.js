import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import axios from 'axios'
import Marquee from 'react-css-marquee'



const Chuckticker = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random")
      .then(result => setData(result.data))

  }, [])


  return (
    <>
      <div style={{ width: "552px", margin: "auto", height: "auto", textAlign:"center", backgroundColor: "#5f6470"  }}>
        <img src="/assets/images/CoderBook_logo.png" />
      </div>

      <div style={{ color: "white", border: "1px solid #5f6470", height: "50px", width: "552px", margin: "auto", backgroundColor: "#5f6470" }}>

        <Marquee text={data.value} size={1.5} speed={2} />

      </div >
    </>
  )
}

export default Chuckticker


