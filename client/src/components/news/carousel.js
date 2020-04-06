


import React from 'react';
import Carousel from 'react-material-ui-carousel';
import MediaCard from './news.js';
import MediaCard1 from './news1.js';
import MediaCard2 from './news2.js';
import autoBind from 'auto-bind';
import {
  FormLabel,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Paper,
  Button
} from '@material-ui/core'

function newsCarousel(props) {
  return (
    <Paper>
      <MediaCard />
      <MediaCard1 />
      <MediaCard2 />
    </Paper>
  )
}

export default class MyProjectsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: true
    }

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    })
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    })
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    })
  }

  render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>
        <h2>3 Newest Tech Articles</h2>

        <Carousel
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
        >
        </Carousel>


        <FormLabel component="legend">Options</FormLabel>
        <FormControlLabel
          control={
            <Checkbox onChange={this.toggleAutoPlay} checked={this.state.autoPlay} value="autoplay" color="primary" />
          }
          label="Auto-play"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={this.toggleIndicators} checked={this.state.indicators} value="indicators" color="primary" />
          }
          label="Indicators"
        />


        {/* <FormLabel component="legend">Animation</FormLabel> */}
        <FormControlLabel
          control={
            <RadioGroup name="animation" value={this.state.animation} onChange={this.changeAnimation} row style={{ marginLeft: "10px" }}>
              <FormControlLabel value="fade" control={<Radio color="primary" />} label="Fade" />
              <FormControlLabel value="slide" control={<Radio color="primary" />} label="Slide" />
            </RadioGroup>
          }
        />

      </div>
    )
  }
}