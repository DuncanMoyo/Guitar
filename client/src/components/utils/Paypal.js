import React, { Component } from "react";

import PaypalExpressBtn from "react-paypal-express-checkout";

class Paypal extends Component {
  render() {
    const onSuccess = (payment) => {
      // console.log(JSON.stringify(payment));

      this.props.onSuccess(payment)

      // const paypalDetails = {
      //   paid: true,
      //   cancelled: false,
      //   payerID: "CVGAF7P2FWRZ4",
      //   paymentID: "PAYID-L53QORQ9HE79798MS792400W",
      //   paymentToken: "EC-6E1963796M1655307",
      //   returnUrl:
      //     "https://www.paypal.com/checkoutnow/error?paymentId=PAYID-L53QORQ9HE79798MS792400W&token=EC-6E1963796M1655307&PayerID=CVGAF7P2FWRZ4",
      //   address: {
      //     recipient_name: "John Doe",
      //     line1: "Free Trade Zone",
      //     city: "Johannesburg",
      //     state: "",
      //     postal_code: "2038",
      //     country_code: "ZA",
      //   },
      //   email: "sb-ef0pf3352825@personal.example.com",
      // };
    };

    const onCancel = (data) => {
      console.log(JSON.stringify(data));
    };

    const onError = (er) => {
      console.log(JSON.stringify(er));
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "AZGZZBYSivFXv9dFR0bm2ABIqAl1nIf3VxO1dEN68piaSyCnMjx1n_AwjzasCBIUBrMu-X_4knCRMjfC",
      production: "",
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout",
          }}
        />
      </div>
    );
  }
}

export default Paypal;
