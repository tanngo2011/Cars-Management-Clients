import React from "react";
import { Carousel } from "antd";
// import carImage from "../../assets/anh-1-948 (1).jpg"

function CarouselHome(props) {
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  const contentStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100vh",
    width: "1100px"
  };


  return (
    <div>
      <Carousel
        // afterChange={onChange}
        autoplay
        autoplaySpeed={3000}
      >
        <div>
          {/* <img
            alt="example"
            src={carImage}
          /> */}
          <img
            style={contentStyle}
            src="https://xehay.vn/uploads/images/2023/2/02/xehay-Lamborghini-070222-11.jpg"
          ></img>
        </div>

        <div>
          <img
            style={contentStyle}
            src="https://cafefcdn.com/203337114487263232/2023/3/30/lamborghini-revuelto-foto-2023-3-16801007110011402059454-1680134297509-16801342976741323113170-1680160360582-168016036069910498943.jpg"
          ></img>
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://i1-vnexpress.vnecdn.net/2022/10/11/Territory1jpg-1665461009.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=XU8eT-KF9WnLG83h5QYSRw&t=image"
          ></img>
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://kientrucvadoisong.net/Upload/News/porsche-viet-nam-gioi-thieu-dong-xe-cayenne-moi.jpg"
          ></img>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
