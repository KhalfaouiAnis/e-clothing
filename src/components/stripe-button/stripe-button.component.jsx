import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_cvR1yDmwkBTuv1Y4Pcnl6MeX00By9wv7dA";
  const onToken = (token) => {
    console.log(token);
    alert("Payment success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="e-Shopping"
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
