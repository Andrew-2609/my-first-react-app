import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingMethod, setShippingMethod] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      >
        {comment}
      </textarea>
      <p>Comment: {comment}</p>

      <select value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment method: {paymentMethod}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shippingMethod === "Pick Up"}
          onChange={handleShippingMethodChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shippingMethod === "Delivery"}
          onChange={handleShippingMethodChange}
        />
        Delivery
      </label>
      <p>Shipping method: {shippingMethod}</p>
    </div>
  );
}

export default MyComponent;
