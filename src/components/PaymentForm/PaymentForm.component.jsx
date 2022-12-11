import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPES } from "../Button/Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  console.log({ elements }, " render");

  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log(" submiet");
    if (!stripe || !elements) return;
    console.log("going for api call");
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 1000 }),
        }
      ).then((res) => res.json());
      const {
        paymentIntent: { client_secret },
      } = response;

      console.log({client_secret}, ' successful intent');

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "madhav",
            "address": {
              "city": 'Sonipat',
              "country": "IN",
              "line1": null,
              "line2": null,
              "postal_code": "131001",
              "state": 'HR'
            },
          },
        }
      })
      console.log({ paymentResult });
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('payment successful')
        }
      }
      console.log({ client_secret })
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES.INVERTED} type="submit">
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
