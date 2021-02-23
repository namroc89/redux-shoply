import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector((st) => st.cart);
  let numOfItems = 0;
  for (let id in cart) {
    numOfItems += cart[id];
  }

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <Link to="/">Shoply</Link>
      <ul className="navbar-nav">
        <li>
          <Link to="/cart" className="nav-link">
            Cart ({numOfItems} items)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
