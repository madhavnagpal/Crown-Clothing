require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      description: "development",
      currency: "usd",
      payment_method_types: ["card"],
      shipping: {
        name: "Random singh",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error }, ' Error while creating payment intent *********');

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
