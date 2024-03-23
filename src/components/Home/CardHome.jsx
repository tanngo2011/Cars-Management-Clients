import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CardHome(props) {
  const { Meta } = Card;

  //Lấy biến state listCar được quản lý trong Redux Store:
  let reduxListCar = useSelector((reduxState) => {
    return reduxState.listCar.listCar;
  });

  // const listCar = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="row container">
        <div className="grid">
          {reduxListCar?.map((el, i) => {
            return (
              <div key={i} className="grid-item">
                <Card
                  hoverable
                  style={{ width: 200 }}
                  actions={[<NavLink to={"/car"}>Xem thêm</NavLink>]}
                  cover={
                    <img
                      alt="example"
                      src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg"
                    />
                  }
                >
                  <Meta
                    title={`Car ${i + 1}`}
                    description={
                      <>
                        <b> Biển số:</b> {el.licensePlate}
                        <br />
                        <b> Tên Khách hàng:</b> {el.customerName}
                      </>
                      // "kk"
                    }
                  />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardHome;
