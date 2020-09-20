import React, { Component } from 'react';
import HomePromotion from './HomePromotion';
import HomeSlider from './HomeSlider';


class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    )
  }
}

export default Home
