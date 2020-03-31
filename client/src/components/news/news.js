import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'

const NewsArea = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&language=en&apiKey=7561e5f155d14e048633335b62c31dde")
      .then(result => {
        console.log(result.data.articles)
        setData(result.data.articles)
      })


  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} /> */}
        <div>{data.articles}</div>

      </Container>
    </React.Fragment>
  )
}

export default NewsArea