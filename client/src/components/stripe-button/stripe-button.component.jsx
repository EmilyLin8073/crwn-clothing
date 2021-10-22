import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JbxNTBTx7Hgbr63VRlQUR5b1EMqkwAMCiepEFd9TCx9s5odGCI5x4r27vezPDDnbxi7ZURFl3nYbHc7hXPbhE0O00lAQWf2Eq";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((resp) => {
        alert("Payment Successful!");
      })
      .catch((error) => {
        console.log("Pyament error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided cerdit cert"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
