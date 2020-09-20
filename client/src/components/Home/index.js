import React, { Component } from "react";
import HomePromotion from "./HomePromotion";
import HomeSlider from "./HomeSlider";

import { connect } from "react-redux";
import {
  getProductsByArrival,
  getProductsBySell,
} from "../../actions/Product_actions";
import CardBlock from "../utils/Form/CardBlock";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guitars"
        />
        <HomePromotion />
        <CardBlock
          list={this.props.products.byArrival}
          title="New Arrivals"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Home);
