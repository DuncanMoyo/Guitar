import React, { Component } from "react";

import { connect } from "react-redux";
import { getCartItems } from "../../actions/User_actions";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";
import faSmile from "@fortawesome/fontawesome-free-solid/faSmile";
import UserLayout from "../hoc/UserLayout";
import UserProductBlock from "../utils/User/UserProductBlock";

class UserCart extends Component {
  state = {
    loading: true,
    total: 0,
    showSuccess: false,
    showTotal: false,
  };

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if (user.userData.cart) {
      if (user.userData.cart.length > 0) {
        user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        this.props
          .dispatch(getCartItems(cartItems, user.userData.cart))
          .then(() => {});
      }
    }
  }

  removeFromCart = () => {

  }

  render() {
    return (
      <UserLayout>
        <div>
          <h1>My Cart</h1>
          <div className='user_cart'>
            <UserProductBlock 
              products={this.props.user}
              type='cart'
              removeItem={id => this.removeFromCart(id)}
            >
              
            </UserProductBlock>
          </div>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserCart);
