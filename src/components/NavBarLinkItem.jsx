import React from "react";
import { Link, useParams } from "react-router-dom";

function NavBarLinkItem({ to, title}) {
    const currentPath = window.location.pathname;
  return (
    <Link to={to}>
      <li
        className={`cursor-pointer hover:text-red transition whitespace-nowrap ${
            currentPath === to ? "text-red" : ""
        }`}
       
      >
        {title}
      </li>
    </Link>
  );
}

export default NavBarLinkItem;
