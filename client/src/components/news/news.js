import React, { useEffect, useState } from 'react';
import axios from 'axios'

const NewsArea = () => {
  const [data, setData] = useState([])
  const [newsPic, setNewsImage] = useState([])
  const [newsUrl, setNewsUrl] = useState([])
  const [newsContent, setNewsContent] = useState([])

const fetchData = () => {
    const newsAPI = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&sortBy=publishedAt&apiKey=7561e5f155d14e048633335b62c31dde'

    const getArticle = axios.get(newsAPI)
    axios.all([getArticle]).then(
      axios.spread((...allData) => {
        const allDataTitle = allData[0].data.articles[1].title
        const allDataUrl = allData[0].data.articles[1].url
        const allDataImage = allData[0].data.articles[1].urlToImage
        const allDataContent = allData[0].data.articles[1].content

        setData(allDataTitle)
        setNewsUrl(allDataUrl)
        setNewsImage(allDataImage)
        setNewsContent(allDataContent)
        console.log()
      })
    )

  }

  useEffect(() => {

    fetchData()
  }, [])

  return (
    <>
      <h1>{data}</h1>
      <img src={newsPic} />
      <div>{newsUrl}</div>
      <div>{newsContent}</div>
    </>

  )
}

export default NewsArea
