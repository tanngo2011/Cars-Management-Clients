import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useState, useContext, useEffect } from "react";
import { Button } from "reactstrap";
import { FormContext } from "../../context/DataContext";
import { useSelector } from "react-redux";

function InputUpdateForm(props) {


  let context = useContext(FormContext);


  //Lấy biến state listCar được quản lý trong Redux Store:
  let reduxListCar = useSelector((reduxState) => {
    return reduxState.listCar.listCar
  })

  let [licensePlateInput, setLisencePlate] = useState("");
  let [repairDateInput, setRepairDate] = useState("");
  let [customerNameInput, setCustomerName] = useState("");
  let [catalogInput, setCatalog] = useState("");
  let [carMakerInput, setCarMaker] = useState("");



  useEffect(() => {
    setLisencePlate(reduxListCar[context.indexUpdate].licensePlate);
    setRepairDate(reduxListCar[context.indexUpdate].repairDate);
    setCustomerName(reduxListCar[context.indexUpdate].customerName);
    setCatalog(reduxListCar[context.indexUpdate].catalog);
    setCarMaker(reduxListCar[context.indexUpdate].carMaker)
    // console.log(context.indexUpdate);
    // console.log(reduxListCar[context.indexUpdate]);
  }, []);




  let handleCustomerName = (event_param) => {
    let value = event_param.target.value;
    setCustomerName(value);
  };

  let handleCatalog = (event_param) => {
    let value = event_param.target.value;
    setCatalog(value);
  };

  let handleCarMaker = (event_param) => {
    let value = event_param.target.value;
    setCarMaker(value);
  };

  let logData = () => {
    let updateCar = {
      licensePlate: licensePlateInput,
      repairDate: repairDateInput,
      customerName: customerNameInput,
      catalog: catalogInput,
      carMaker: carMakerInput,
    };

    context.handleUpdateCar(updateCar);
    // console.log(updateCarCar);
  };


  let handleReset = () => {
    setCustomerName("");
    setCatalog("");
    setCarMaker("");
  }


  //logic để lấy ra ngày hôm nay:
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;





  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleText">License Plate</Label>
          <Input 
          id="exampleText" 
          name="text" 
          readOnly 
          value={licensePlateInput} 
          title="Bạn không thể Update Biển số xe"/>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Repair Date</Label>
          <Input
            id="exampleText"
            max={today}
            type="date"
            readOnly
            value={repairDateInput}
            title="Bạn không thể Update Ngày sửa xe"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Customer Name</Label>
          <Input
            id="exampleText"
            name="text"
            onChange={() => handleCustomerName(event)}
            value={customerNameInput}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Catalog</Label>
          <Input
            id="exampleText"
            name="text"
            onChange={() => handleCatalog(event)}
            value={catalogInput}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Car Maker</Label>
          <Input
            id="exampleText"
            name="text"
            onChange={() => handleCarMaker(event)}
            value={carMakerInput}
          />
        </FormGroup>
        <br />

        <Button color="success" onClick={logData}>
          Update
        </Button>

        <Button style={{ margin: "10px" }} color="warning" type="reset"
        onClick={handleReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

export default InputUpdateForm;
