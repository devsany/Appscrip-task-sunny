import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li>
            <NavLink to="/storie">STORIE</NavLink>
          </li>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      <div className="page-Description">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
