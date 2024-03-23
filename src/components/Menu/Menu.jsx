import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LogInMenu from "./LogInMenu";
import LogOutMenu from "./LogOutMenu";
import { useDispatch, useSelector } from "react-redux";
import { actionShowLogOut } from "../../redux/actions/updateMenuAction";

function Menu(props) {

  let dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("loginData")) {
      dispatch(actionShowLogOut())
    }
  }, [])


  //Lấy biến state updateMenu được quản lý trong Redux Store:
  let reduxUpdateMenu = useSelector((reduxState) => {
    return reduxState.updateMenu.updateMenu;
  });



  return (
    <>
      {/* Sử dụng header của bootstrap */}
      <div className="page-header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink to={"/"} className="navbar-brand">
                CAR MANAGEMENT
              </NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <NavLink to={"/car"}>Car</NavLink>
              </li>
              {/* <li>
                <Link to={"/accessory"}>Accessory</Link>
              </li> */}
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              {reduxUpdateMenu ? <LogOutMenu /> : <LogInMenu/> }
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
