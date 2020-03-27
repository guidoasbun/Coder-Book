import React from 'react'
import axios from 'axios'
import { get } from 'mongoose'

const NewsArea = () => {
  axios.get("http://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&language=en&apiKey=7561e5f155d14e048633335b62c31dde"
)
  .then(r => r.json())
  .then(({ articles }) => {
    console.log(articles);

  return (
    
  )
    document.getElementById("newsTitle0").innerHTML = `
        <h4>${articles[0].title}</h4>
      `;
    document.getElementById("newsBody0").innerHTML = `
        <p>${articles[0].description}</p>
      `;
    document.getElementById("newsTitle1").innerHTML = `
        <h4>${articles[1].title}</h4>
      `;
    document.getElementById("newsBody1").innerHTML = `
        <p>${articles[1].description}</p>
      `;
    document.getElementById("newsTitle2").innerHTML = `
        <h4>${articles[2].title}</h4>
      `;
    document.getElementById("newsBody2").innerHTML = `
        <p>${articles[2].description}</p>
      `;
  })
  .catch(e => console.error(e));

  export default NewsArea