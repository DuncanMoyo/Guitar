import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../actions/User_actions";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";
import faSmile from "@fortawesome/fontawesome-free-solid/faSmile";
import UserLayout from "../hoc/UserLayout";
import UserProductBlock from "../utils/User/UserProductBlock";
import Paypal from "../utils/Paypal";

// AZGZZBYSivFXv9dFR0bm2ABIqAl1nIf3VxO1dEN68piaSyCnMjx1n_AwjzasCBIUBrMu-X_4knCRMjfC

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
          .then(() => {
            if (this.props.user.cartDetails.length > 0) {
              this.calculateTotal(this.props.user.cartDetails);
            }
          });
      }
    }
  }

  calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.forEach((item) => {
      total += parseInt(item.price, 10) * item.quantity;

      this.setState({ total, showTotal: true });
    });
  };

  removeFromCart = (id) => {
    this.props.dispatch(removeCartItem(id)).then(() => {
      if (this.props.user.cartDetail.length <= 0) {
        this.setState({
          showTotal: false,
        });
      } else {
        this.calculateTotal(this.props.user.cartDetail);
      }
    });
  };

  showNoItemMessage = () => (
    <div className="cart_no_items">
      <FontAwesomeIcon icon={faFrown} />
      <div>You Have no items</div>
    </div>
  );

  transactionError = (data) => {
    console.log("Paypal Error");
  };

  transactionCancelled = () => {
    console.log("Transaction Cancelled");
  };

  transactionSuccess = (data) => {
    this.props
      .dispatch(
        onSuccessBuy({
          cartDetail: this.props.user.cartDetail,
          paymentData: data,
        })
      )
      .then(() => {
        if (this.props.user.successBuy) {
          this.setState({
            showTotal: false,
            showSuccess: true,
          });
        }
      });
  };

  render() {
    return (
      <UserLayout>
        <div>
          <h1>My Cart</h1>
          <div className="user_cart">
            <UserProductBlock
              products={this.props.user}
              type="cart"
              removeItem={(id) => this.removeFromCart(id)}
            />
            {this.state.showTotal ? (
              <div>
                <div className="user_cart_sum">
                  <div>Total Amount: $ {this.state.total}.00</div>
                </div>
              </div>
            ) : this.state.showSuccess ? (
              <div className="cart_success">
                <FontAwesomeIcon icon={faSmile} />
                <div>THANK YOU</div>
                <div>YOUR ORDER IS NOW COMPLETE</div>
              </div>
            ) : (
              this.showNoItemMessage()
            )}
          </div>
          {this.state.showTotal ? (
            <div className="paypal_button_container  ">
              <Paypal
                toPay={this.state.total}
                transactionError={(data) => {
                  this.transactionError(data);
                }}
                transactionCancelled={(data) => {
                  this.transactionCancelled(data);
                }}
                onSuccess={(data) => {
                  this.transactionSuccess(data);
                }}
              />
            </div>
          ) : null}
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
