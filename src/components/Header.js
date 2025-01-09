import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login"
  const [btnName, setBtnName] = useState("login");
const onlineStatus = useOnlineStatus()
const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="flex justify-between">
      <div className="w-56">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">
            OnlineStatus : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">Cart - {cartItems.length}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  ); 
};

export default Header;
