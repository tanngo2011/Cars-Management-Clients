import React from 'react';
import { Link } from 'react-router-dom';

function LogInMenu(props) {
    return (
        <>
            <li>
                <Link to={"/login"}>
                  <span className="glyphicon glyphicon-log-in"></span> Log In
                </Link>
              </li>
        </>
    );
}

export default LogInMenu;