import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core';
import MediaCard from './news.js';
import MediaCard1 from './news1.js';
import MediaCard2 from './news2.js'

export default function newsCarousel() {
  const items = [
    <MediaCard />,
    <MediaCard1 />,
    <MediaCard2 />
  ];

  return (
    <Carousel>
      {items.map(item => {
        <Item item={item} />
      })
      }
    </Carousel>
  )
}

