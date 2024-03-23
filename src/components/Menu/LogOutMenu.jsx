import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";

function LogOutMenu(props) {
    
  let handleLogOut = useContext(MenuContext);

  return (
    <>
      <li onClick={handleLogOut}>
        <Link>
          <span className="glyphicon glyphicon-log-out"></span> Log Out
        </Link>
      </li>
    </>
  );
}

export default LogOutMenu;
