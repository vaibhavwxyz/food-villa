import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold">Welcome to Cart!</h1>
      <ul>
        {cartItems.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
