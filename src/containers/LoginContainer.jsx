import React, { useEffect } from "react";
import LoginForm from "../components/Login/LoginForm";
import { login } from "../api/LoginApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionShowLogOut } from "../redux/actions/updateMenuAction";

function LoginContainer(props) {
  let navigate = useNavigate();

  let dispatch = useDispatch();


  const handleLogin = (data) => {
    console.log(data);

    //SỬA LẠI ĐOẠN LOGIN NÀY THEO GỢI Ý CỦA ANH QUANG: sửa API login, gửi thông tin đăng nhập vào body của
    //request của API login, check xem thông tin đó có trên hệ thống hay chưa, nếu có rồi thì mới set thông 
    //tin đó vào Local Storage
    localStorage.setItem("loginData", JSON.stringify(data));

    //test method login() trong LoginApi:
    login(data).then((response) => {
      console.log(response);

      //Nếu đăng nhập thành công:
      if (response.status == "200") {
        //1. Đổi nút Log In trên Menu bằng nút Log Out 
        dispatch(actionShowLogOut());
        //2. Chuyển hướng ngay đến trang chủ
        navigate("/");
      } else if (response.status == "401") {
        alert(
          "Tên Đăng nhập hoặc Mật khẩu của bạn chưa có trên Hệ thống!!! Vui lòng thử lại!!!"
        );
      }
    });
    console.log("Let's log in");
  };

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  );
}

export default LoginContainer;
