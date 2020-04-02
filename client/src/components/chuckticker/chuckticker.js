import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import axios from 'axios'
import Marquee from 'react-css-marquee'
import Typography from '@material-ui/core/Typography';


const Chuckticker = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random?category=dev")
      .then(result => setData(result.data))
    console.log(data)
  }, [])


  return (
    <>

      <Typography>
        <div style={{ color: "white", width: "90%", margin: "auto" }}>
          <Marquee text={data.value} size={1.5} speed={2} />
        </div>
      </Typography>
    </>
  )
}

export default Chuckticker