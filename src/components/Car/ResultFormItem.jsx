import React from "react";
import { useContext } from "react";
import { Button } from "reactstrap";
import { FormContext } from "../../context/DataContext";
import { useSelector } from "react-redux";

function ResultFormItem(props) {

  let context = useContext(FormContext);

  //Lấy biến state listCar được quản lý trong Redux Store:
  let reduxListCar = useSelector((reduxState) => {
    return reduxState.listCar.listCar
  })

  //logic để tạo STT cho bảng: STT sẽ bằng số thứ tự trang hiện tại trừ đi 1, tất cả nhân 5 rồi cộng thêm 1
  //(giải thích: nhận thấy, trang số 1 có STT đầu tiên là 1, trang số 2 có STT đầu tiên là 6, trang số 3 có
  //STT đầu tiên là 11,... từ đó ta có thể suy ra được quy luật giữa số thứ tự trang và STT đầu tiên của mỗi
  //trang: trang đầu tiên luôn có STT đầu tiên là 1, mỗi lần sang trang kế tiếp thì STT đầu tiên của trang 
  //đầu tiên lần lượt tăng lên 5 đơn vị => trang thứ n thì STT đầu tiên của trang đầu tiên đã được tăng lên
  //(n-1)*5 đơn vị => STT đầu tiên của trang n là 1 + (n-1)*5 )
  let id = 1 + (context.currentPage - 1) * 5;


  let carRow = reduxListCar?.map((car, i) => {
    // console.log(car);
    return (
      <tr key={i}> 
        <th scope="row">{id++}</th>
        <td>{car.licensePlate}</td>
        <td>{car.repairDate}</td>
        <td>{car.customerName}</td>
        <td>{car.catalog}</td>
        <td>{car.carMaker}</td>
        <td>
          <Button color="warning" onClick={() => context.handleGetIndex(i)}>Edit</Button>
        </td>
        <td>
          <Button color="danger" onClick={() => context.handleDeleteCar(i)}>Delete</Button>
        </td>
      </tr>
    
    );
  });

  return carRow;
}

export default ResultFormItem;
