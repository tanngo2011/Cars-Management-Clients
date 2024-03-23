import React from "react";
import { useEffect, useState, useRef } from "react";
import ResultForm from "../components/Car/ResultForm";
import CreateButton from "../components/Car/CreateButton";
import ModalCreate from "../components/Car/ModalCreate";
import { createCar, deleteCar, getListCar, updateCar } from "../api/CarApi";
import { FormContext } from "../context/DataContext";
import ModalUpdate from "../components/Car/ModalUpdate";
import { Pagination } from "antd";
import {
  actionDeleteListCar,
  actionPushListCar,
  actionSetListCar,
  actionUpdateListCar,
} from "../redux/actions/listCarAction";
import { useDispatch, useSelector } from "react-redux";
import {
  actionCloseCreateModal,
  actionShowCreateModal,
} from "../redux/actions/createFormAction";
import {
  actionCloseUpdateModal,
  actionShowUpdateModal,
} from "../redux/actions/updateFormAction";
import { actionShowLogOut } from "../redux/actions/updateMenuAction";

function CarContainer(props) {


  let dispatch = useDispatch();

  const [indexUpdate, setIndexUpdate] = useState("");

  //Tại sao không dùng được useRef ở đây???
  // const totalElements = useRef("");

  const [totalElements, setTotalElements] = useState("");

  const [currentPage, setCurrentPage] = useState(1);




  useEffect(() => {
    getListCar(currentPage).then((response) => {
      console.log(response);

      //Lấy ra tổng số dữ liệu hiện có trong (toàn bộ) page:
      setTotalElements(response.totalElements);

      //lấy ra dữ liệu trong 1 trang và gán nó vào listCar đang được quản lý trong redux:
      dispatch(actionSetListCar(response.content));
    });
    //Mỗi khi currentPage được set lại thì function trong useEffect sẽ được gọi
  }, [currentPage]);



  //Lấy biến state listCar được quản lý trong Redux Store:
  let reduxListCar = useSelector((reduxState) => {
    return reduxState.listCar.listCar;
  });



  //Xử lý đóng mở Modal Create:
  let handleOpenModal = () => {
    dispatch(actionShowCreateModal());
  };

  let handleCloseModal = () => {
    dispatch(actionCloseCreateModal());
  };



  //Thêm mới Car:
  let handleCreateNewCar = (newCar) => {
    createCar(newCar).then((response) => {
      console.log(response);
      if (response.status == "201") {
        handleCloseModal();
        alert("Bạn đã thêm mới thành công một Car");
        dispatch(actionPushListCar(newCar));
      }
    });
  };



  //Xử lý đóng mở Modal Update:
  let handleOpenUpdateModal = () => {
    dispatch(actionShowUpdateModal());
  };

  let handleCloseUpdateModal = () => {
    dispatch(actionCloseUpdateModal());
  };



  //Update Car:
  //Xử lý nút Edit: Method dùng để lấy ra index trong ResultFormItem:
  let handleGetIndex = (index) => {
    handleOpenUpdateModal();
    console.log("Update thuiii");
    setIndexUpdate(index);
    console.log(indexUpdate);
  };

  //Xử lý Nút Update:
  let handleUpdateCar = (updateCar_param) => {
    console.log(updateCar_param);
    updateCar(updateCar_param)
      .then((response) => {
        console.log(response);
        console.log(indexUpdate);

        if (response.response?.status == "400") {
        } else {
          dispatch(actionUpdateListCar(response.data, indexUpdate));
          handleCloseUpdateModal();
          alert(
            `Bạn đã Update thành công Car có biển số: ${response.data.licensePlate}`
          );
        }
      });
  };



  //Delete Car:
  let handleDeleteCar = (index) => {
    console.log(index);
    console.log(reduxListCar[index]);
    let deletedCar = {
      licensePlate: reduxListCar[index].licensePlate,
      repairDate: reduxListCar[index].repairDate,
    };

    let result = confirm("Bạn có chắc chắn muốn xoá Car này không?");
    if (result) {
      deleteCar(deletedCar).then((response) => {
        console.log(response);
        if (response.request.status == "403") {
        } else {
          dispatch(actionDeleteListCar(index));
          alert("Bạn đã Xoá thành công một Car");
        }
      });
    }
  };



  //xử lý chuyển trang:
  let handleSwitchPage = (page) => {
    console.log("Page đã switch");
    console.log(page);

    //set đối số page lưu trữ số thứ tự trang hiện tại cho biến currentPage:
    setCurrentPage(page);
  };



  return (
    <>
      <FormContext.Provider
        value={{
          listCar: reduxListCar,
          handleCreateNewCar: handleCreateNewCar,
          handleUpdateCar: handleUpdateCar,
          handleGetIndex: handleGetIndex,
          handleDeleteCar: handleDeleteCar,
          indexUpdate: indexUpdate,
          currentPage: currentPage,
        }}
      >
        <ResultForm />
        <br />
        <div id="pagination">
          <Pagination
            defaultCurrent={1}
            total={totalElements}
            defaultPageSize={5}
            //Component Pagination của Ant Design có một đối số là page lưu trữ số thứ tự trang hiện tại
            onChange={(page) => handleSwitchPage(page)}
          />
        </div>
        <br />
        <CreateButton handleOpenModal={handleOpenModal} />
        <br />
        <ModalCreate handleCloseModal={handleCloseModal} />
        <ModalUpdate handleCloseUpdateModal={handleCloseUpdateModal} />
      </FormContext.Provider>
    </>
  );
}

export default CarContainer;
