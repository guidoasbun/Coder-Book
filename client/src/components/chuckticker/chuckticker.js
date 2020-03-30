import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import axios from 'axios'
import Marquee from 'react-css-marquee'
import 'typeface-roboto'
import { Typography } from '@material-ui/core'


const Chuckticker = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random")
      .then(result => setData(result.data))

  }, [])


  return (
    <>


      <div style={{ color: "white", width: "90%", margin: "auto" }}>
        <Typography>
          <Marquee text={data.value} size={1.5} speed={2} />
        </Typography>

      </div>
    </>
  )
}

export default Chuckticker