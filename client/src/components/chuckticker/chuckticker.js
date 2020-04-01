import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import axios from 'axios'
import Marquee from 'react-css-marquee'



const Chuckticker = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random?category=dev")
      .then(result => setData(result.data))
    console.log(data)
  }, [])


  return (
    <>


      <div style={{ color: "white", width: "90%", margin: "auto" }}>
        <Marquee text={data.value} size={1.5} speed={2} />
      </div>
    </>
  )
}

export default Chuckticker