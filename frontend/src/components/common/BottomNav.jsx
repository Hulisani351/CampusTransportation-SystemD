// components/BottomNav.js
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const BottomNav = ({ activeMenuItem, handleMenuItemClick }) => {
  return (
    <nav className="bg-white text-white flex justify-around p-4 fixed bottom-0 w-full lg:hidden">
      <Link
        to="/"
        onClick={() => handleMenuItemClick("Home")}
        className={`flex flex-col items-center ${
          activeMenuItem === "Home" ? "text-black" : "text-gray-300"
        }`}
      >
        <FontAwesomeIcon icon={faHome} />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        to="/UserService"
        onClick={() => handleMenuItemClick("Analytics")}
        className={`flex flex-col items-center ${
          activeMenuItem === "Analytics" ? "text-black" : "text-gray-300"
        }`}
      >
        <FontAwesomeIcon icon={faChartLine} />
        <span className="text-xs">Analytics</span>
      </Link>
      <Link
        to="/stafftasks"
        onClick={() => handleMenuItemClick("Tasks")}
        className={`flex flex-col items-center ${
          activeMenuItem === "Tasks" ? "text-black" : "text-gray-300"
        }`}
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
        <span className="text-xs">Tasks</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
