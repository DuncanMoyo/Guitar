import React, { Component } from "react";
import Footer from "../Header_Footer/Footer";
import Header from "../Header_Footer/Header";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
