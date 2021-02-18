import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IIzcfCELV0OYscUydsAAbhrRkjpdbHtufR2AjhUXedAhi9wLsVBAEPS8Conl8D3aJ3H0ImhfCEJXdA5mnlRaO3H00SR9uyLZU";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then((response) => {
        alert("payment successful");
      })
      .catch((error) => {
        console.log("payment error: " + error);
        alert("There was an error with payment.");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing ltd."
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
