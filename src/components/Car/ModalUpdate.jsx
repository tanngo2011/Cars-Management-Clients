import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputUpdateForm from './InputUpdateForm';
import { useSelector } from 'react-redux';


function ModalUpdate(props) {

    let {handleCloseUpdateModal} = props;

    //Lấy biến state listCar được quản lý trong Redux Store:
    let reduxUpdateForm = useSelector((reduxState) => {
      return reduxState.updateForm.updateForm
    })

    return (
        <>
        <Modal 
        isOpen= {reduxUpdateForm}
        fade={false}
        >
          <ModalHeader>
            <b>UPDATE CAR</b>
          </ModalHeader>
          <ModalBody>
            <InputUpdateForm />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleCloseUpdateModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
}

export default ModalUpdate;