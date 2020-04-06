import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const [data, setData] = useState([])
  const [newsPic, setNewsImage] = useState([])
  const [newsUrl, setNewsUrl] = useState([])
  const [newsContent, setNewsContent] = useState([])

  const fetchData = () => {
    const newsAPI = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&sortBy=publishedAt&apiKey=7561e5f155d14e048633335b62c31dde'

    const getArticle = axios.get(newsAPI)
    console.log(getArticle)
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
      }));
  }
  useEffect(() => {
    fetchData()
  }, [])
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={newsPic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={newsUrl} target="_blank" position="center" size="small" color="primary">
          Learn More
                </Button>
      </CardActions>
    </Card >
  );
}
