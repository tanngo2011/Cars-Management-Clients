import React from "react";
import CarouselHome from "../components/Home/CarouselHome";
import CardHome from "../components/Home/CardHome";
import { useEffect } from "react";
import { getAllListCar } from "../api/CarApi";
import { actionSetListCar } from "../redux/actions/listCarAction";
import { useDispatch } from "react-redux";

function HomeContainer(props) {
  let dispatch = useDispatch();

  useEffect(() => {
    getAllListCar().then((response) => {
      console.log(response);
      dispatch(actionSetListCar(response.content));
    });
  }, []);

  return (
    <>
      <CarouselHome />
      <br />

      <br />
      <CardHome />
    </>
  );
}

export default HomeContainer;
