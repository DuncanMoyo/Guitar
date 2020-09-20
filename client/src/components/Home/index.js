import React, { Component } from 'react';
import HomePromotion from './HomePromotion';
import HomeSlider from './HomeSlider';

import {connect} from 'react-redux'
import {getProductsByArrival, getProductsBySell} from '../../actions/Product_actions'


class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival())
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);
