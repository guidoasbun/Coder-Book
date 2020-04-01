import React, { useEffect, useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios"

const NewsArea = () => {
  const [data, setData] = useState(1);
  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&language=en&apiKey=7561e5f155d14e048633335b62c31dde")
       .then (result => { console.log(result.data.articles)
         setData(result.data.articles) })
  }, []);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div>
          {}
        </div>
        {/* <Typography {{ backgroundColor: ‘#CFE8FC’, hstyle=eight: ‘100vh’ }} /> */}
      </Container>
    </React.Fragment>
  )
};

export default NewsArea;

  //   <>
  //   <document.getElementById("newsTitle0").innerHTML = `
  //       <h4>${articles[0].title}</h4>
  //     ` />;
  //   >document.getElementById("newsBody0").innerHTML = `
  //       <p>${articles[0].description}</p>
  //     ` />;
  //   document.getElementById("newsTitle1").innerHTML = `
  //       <h4>${articles[1].title}</h4>
  //     ` />;
  //   document.getElementById("newsBody1").innerHTML = `
  //       <p>${articles[1].description}</p>
  //     ` />;
  //   document.getElementById("newsTitle2").innerHTML = `
  //       <h4>${articles[2].title}</h4>
  //     ` />;
  //   document.getElementById("newsBody2").innerHTML = `
  //       <p>${articles[2].description}</p>
  // >)
  // .catch(e => console.error(e));