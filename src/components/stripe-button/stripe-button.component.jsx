import React from "react";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KEbugSGLIyPssdRchzrMNHIacHupLsRpYBeNd14tKEv0aVG5gMq9aetwuxsT0cBGr3NhmfcQ9JJRUdTUlEeZXSM00D9KUX1zG";

  const onToken = (token) => {
    console.log(token);
    swal({
      title: "Good job!",
      text: "Payment Successful!",
      icon: "success",
      button: "ok",
    });
  };

  return (
    <StripeCheckout
      label="Pay Now 💳"
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
