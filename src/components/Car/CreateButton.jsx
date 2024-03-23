import React from "react";
import {Button} from "reactstrap"

function CreateButton(props) {

  let {handleOpenModal} = props;

  return (
    <div>
      <Button color="primary" onClick={handleOpenModal}>Create Car</Button>
    </div>
  );
}

export default CreateButton;