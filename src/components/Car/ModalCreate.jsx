import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputCreateForm from "./InputCreateForm";
import { useSelector } from "react-redux";


function ModalCreate(props) {

  let {handleCloseModal} = props;


  //Lấy biến state listCar được quản lý trong Redux Store:
  let reduxCreateForm = useSelector((reduxState) => {
    return reduxState.createForm.createForm
  })



  return (
    <>
      <Modal 
      isOpen= {reduxCreateForm}
      fade={false}
      >
        <ModalHeader>
          <b>CREATE NEW CAR</b>
        </ModalHeader>
        <ModalBody>
          <InputCreateForm />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreate;