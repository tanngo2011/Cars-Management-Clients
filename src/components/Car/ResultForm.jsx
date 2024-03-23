import React from "react";
import ResultFormItem from "./ResultFormItem";
import { Table } from 'reactstrap';

function ResultForm(props) {

  return (
    <div>
      <Table hover>
        <thead>
          <tr style={{backgroundColor: "#DADADA"}}>
            <th>STT</th>
            <th>License Plate</th>
            <th>Repair Date</th>
            <th>Customer Name</th>
            <th>Catalog</th>
            <th>Car Maker</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem 
          />
        </tbody>
      </Table>
    </div>
  );
}

export default ResultForm;