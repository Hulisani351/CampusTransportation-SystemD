// components/TopNav.js
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell, 
} from "@fortawesome/free-solid-svg-icons";

const TopNav = ({ activeMenuItem, handleMenuItemClick }) => {
  return (
    <nav className="bg-white text-black flex justify-between p-4 fixed top-0 w-full lg:hidden shadow-md">
      <span className="flex items-center text-xl font-bold">
        <span className="text-xs">{activeMenuItem}</span>
      </span>
      <Link
        to="/UserNotification"
        onClick={() => handleMenuItemClick("Notification")}
        className={`flex items-center ${
          activeMenuItem === "Notification" ? "text-black" : "text-gray-500"
        }`}
      >
        <FontAwesomeIcon icon={faBell} />
      </Link>
    </nav>
  );
};

export default TopNav;
