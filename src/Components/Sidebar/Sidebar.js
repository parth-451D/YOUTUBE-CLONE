import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSettings,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(log_out());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>HOME</span>
        </li>
      </Link>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>SUBSCRIPTIONS</span>
        </li>
      </Link>
      <li>
        <MdThumbUp size={23} />
        <span>LIKED VIDEO</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>HISTORY</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>LIBRARY</span>
      </li>
      <li>
        <MdSettings size={23} />
        <span>SETTINGS</span>
      </li>
      <hr />
      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span>LOG OUT</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
