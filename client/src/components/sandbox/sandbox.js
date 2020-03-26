import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import axios from 'axios'




const MoveStuffAround = () => (

  < Ticker >
    {({ index }) => (
      <>
        <h1>This is the Headline of element #{index}!</h1>
        <img src="www.my-image-source.com/" alt="" />
      </>
    )}
  </Ticker >
)

export default MoveStuffAround



