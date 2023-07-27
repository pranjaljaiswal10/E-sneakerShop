const Cart = () => {
  return (
    <>
      <div className="Cart">
        <small>MyCart{}</small>
        {state.cart.map((item) => (
          <div className="cartItem">
            <img src="" alt="" />
            <p>-</p>
            <p>{}</p>
            <p>+</p>
            <h1>{}</h1>
            <h2>{}</h2>
            <p>{}</p>
            <p>{}</p>
            <button>Remove</button>
          </div>
        ))}
      </div>
      <div className="price-details">
        <h1>PRICE DETAILS</h1>
        <p>Price({} items)</p>
        <p></p>
        <p>Discount</p>
        <p></p>
        <p>Delivery Charges</p>
        <p>FREE</p>
        <hr />
        <p>Total Amount</p>
        <p></p>
        <hr />
        <p>You will save {} on this order</p>
        <p>{}</p>
        <button>Checkout</button>
      </div>
    </>
  );
};
export default Cart;
