import React from "react";
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add product</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
