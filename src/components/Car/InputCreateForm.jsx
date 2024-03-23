import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import {useState, useContext} from 'react'
import { Button } from "reactstrap";
import { FormContext } from "../../context/DataContext";

function InputCreateForm(props) {


  let context = useContext(FormContext);



  let [licensePlateInput, setLisencePlate] = useState("");
  let [repairDateInput, setRepairDate] = useState("");
  let [customerNameInput, setCustomerName] = useState("");
  let [catalogInput, setCatalog] = useState("");
  let [carMakerInput, setCarMaker] = useState("");


  let handleLicensePlate = (event_param) => {
    let value = event_param.target.value
    setLisencePlate(value)
  } 


  let handleRepairDate = (event_param) => {
    let value = event_param.target.value
    setRepairDate(value)
  } 


  let handleCustomerName = (event_param) => {
    let value = event_param.target.value
    setCustomerName(value)
  } 


  let handleCatalog = (event_param) => {
    let value = event_param.target.value
    setCatalog(value)
  } 


  let handleCarMaker = (event_param) => {
    let value = event_param.target.value
    setCarMaker(value)
  } 




  let logData = () => {

    let newCar = { 
      licensePlate: licensePlateInput,
      repairDate: repairDateInput,
      customerName: customerNameInput,
      catalog: catalogInput,
      carMaker: carMakerInput
    }

    context.handleCreateNewCar(newCar);

  }



  let handleReset = () => {
      setLisencePlate("")
      setRepairDate("")
      setCustomerName("");
      setCatalog("");
      setCarMaker("");
  }




  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();
  if (dd < 10) {
      dd = '0' + dd
  }
  if (mm < 10) {
      mm = '0' + mm
  }
  today = yyyy + '-' + mm + '-' + dd;




  return (
    <div>
      <Form >
        <FormGroup>
          <Label for="exampleText">License Plate</Label>
          <Input id="exampleText" name="text" placeholder="Nhập vào Biển số xe..."
          onChange={() => handleLicensePlate(event)}/>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Repair Date</Label>
          <Input id="exampleText" title="Nhập vào ngày sửa xe..."
          max={today} 
          type="date" 
          onChange={() => handleRepairDate(event)}/>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Customer Name</Label>
          <Input id="exampleText" name="text" placeholder="Nhập vào Tên khách hàng..."
          onChange={() => handleCustomerName(event)}/>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Catalog</Label>
          <Input id="exampleText" name="text" placeholder="Nhập vào Dịch vụ muốn sử dụng (VD: Bảo dưỡng)..."
          onChange={() => handleCatalog(event)}/>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleText">Car Maker</Label>
          <Input id="exampleText" name="text" placeholder="Nhập vào Hãng xe..."
          onChange={() => handleCarMaker(event)}/>
        </FormGroup>
      
        <br />
        <Button color="success" 
        onClick=
        {logData}
        >Create</Button>
        
        <Button style={{margin: "10px"}} color="warning"  type="reset" onClick={handleReset}>Reset</Button>

      </Form> 
    </div>
  );
}

export default InputCreateForm;