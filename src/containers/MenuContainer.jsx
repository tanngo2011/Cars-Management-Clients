import React from "react";
import Menu from "../components/Menu/Menu";
import { MenuContext } from "../context/MenuContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionShowLogIn } from "../redux/actions/updateMenuAction";

function MenuContainer(props) {

  let navigate = useNavigate();

  let dispatch = useDispatch();

  let handleLogOut = () => {
    let result = confirm("Bạn có chắc muốn Đăng xuất không?");
    //Khi bấm vào nút đồng ý Log Out thì:
    if (result) {
      //1. Xoá đi thông tin đăng nhập của người dùng đang lưu trong Local Storage:  
      localStorage.removeItem("loginData");
      //2. Chuyển hướng ngay đến trang Đăng nhập
      navigate("/login");
      //3. Đổi nút Log Out trên Menu bằng nút Log In  
      dispatch(actionShowLogIn());
    } 
  };

  return (
    <>
      <MenuContext.Provider value={handleLogOut}>
        <Menu />
      </MenuContext.Provider>
    </>
  );
}

export default MenuContainer;
