import React, { useState } from "react";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/onderflix.png'
import "./navbar.css";

const Menu = () => (
  <>
    <p><a href="#Content">Content</a></p>
		<p><a href="#License">License</a></p>
		<p><a href="#Library">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
			  <div className="gpt3__navbar-links_container">
				  <Menu />
			  </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar