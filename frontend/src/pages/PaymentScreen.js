import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const { shippingAddress } = cart;
  const disptach = useDispatch();
  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    disptach(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
    console.log(paymentMethod);
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Select Payment Type</Form.Label>
          <Form.Check
            type="radio"
            label="Paypal"
            id="paypal"
            name="paymentMethod"
            checked
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              console.log(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
