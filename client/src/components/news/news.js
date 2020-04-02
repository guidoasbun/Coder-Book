import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { red } from '@material-ui/core/colors';
import 'typeface-roboto'

const titleStyle = {
  color: 'black'
}

const linkStyle = {
  textDecoration: 'none',
}

const newsContainer = {

  borderRadius: '5px',
  background: '#e8eaf6',
  padding: '15px',

}

const image = {
  width: '70%',
  margin: '10px'
}

const NewsArea = () => {
  const [data, setData] = useState([])
  const [newsPic, setNewsImage] = useState([])
  const [newsUrl, setNewsUrl] = useState([])
  const [newsContent, setNewsContent] = useState([])


  const fetchData = () => {
    const hackernewsAPI = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e30ec6dfec534c0c8a26d41b62d6d3d5'

    const getArticle = axios.get(hackernewsAPI)
    axios.all([getArticle]).then(
      axios.spread((...allData) => {
        const allDataTitle = allData[0].data.articles[0].title
        const allDataUrl = allData[0].data.articles[0].url
        const allDataImage = allData[0].data.articles[0].urlToImage
        const allDataContent = allData[0].data.articles[0].content

        setData(allDataTitle)
        setNewsUrl(allDataUrl)
        setNewsImage(allDataImage)
        setNewsContent(allDataContent)
      })
    )

  }

  useEffect(() => {

    fetchData()
  }, [])


  return (
    <>
      <Typography>
        <div style={newsContainer}>
          <a style={linkStyle} href={newsUrl} target="#">
            <h1 style={titleStyle}>{data}</h1>
            <img style={image} src={newsPic} />
          </a>
          <div>{newsContent}</div>
        </div>
      </Typography>
    </>

  )
}

export default NewsArea