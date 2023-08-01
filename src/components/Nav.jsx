import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="flex items-center justify-between py-5">
      <img
        src="https://user-images.githubusercontent.com/73052214/234671439-155f12ea-4095-4264-a83c-5bed32e28ab9.svg"
        alt="logo"
      />
      <ul className="hidden sm:flex gap-5">
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/categories"}>Categories</Link>
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/instamart"}>Instamart</Link>
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/about"}>About us</Link>
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/contact"}>Contact us</Link>
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          <Link to={"/cart"}>Cart- {cartItems.length} items</Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-[#F4694C] px-5 py-2 rounded-full text-white font-semibold text-center md:hover:bg-[#e14221]"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-[#F4694C] px-5 py-2 rounded-full text-white font-semibold text-center md:hover:bg-[#e14221]"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Nav;
