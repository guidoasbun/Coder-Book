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
      <div style={{ width: "100%", margin: "auto", height: "auto", textAlign: "center" }}>
        {/* <img style={{ marginBottom: '5px' }} src="/assets/images/CoderBook_logo.png" /> */}
      </div>

      <div style={{ color: "white", width: "90%", margin: "auto" }}>
        <Marquee text={data.value} size={1.5} speed={2} />
      </div>
    </>
  )
}

export default Chuckticker


