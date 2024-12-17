import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
// let btnName = "Login"
const [btnName, setBtnName] = useState("login")

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login"
            onClick={() =>{
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }}
            >{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header