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
      <div style={{ width: "552px", margin: "auto", height: "auto", textAlign: "center", backgroundColor: "#606571" }}>
        <img src="/assets/images/CoderBook_logo.png" />
      </div>

      <div style={{ color: "white", border: "1px solid #606571", height: "50px", width: "552px", margin: "auto", backgroundColor: "#606571" }}>

        <div style={{ color: "white", border: "1px solid #606571", height: "50px", width: "505px", margin: "auto", backgroundColor: "#606571" }}>

          <Marquee text={data.value} size={1} speed={2} />

        </div >

      </div>
    </>
  )
}

export default Chuckticker


