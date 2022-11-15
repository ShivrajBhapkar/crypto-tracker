import React from "react";
import "./DropDown.css";

const MyComponent = ({ currency, setCurrency }) => (
  <div>
    <select onChange={(e) => setCurrency(e.target.value)}>
      <option defaultValue={currency} value="INR">
        INR
      </option>
      <option value="USD">USD</option>
    </select>
  </div>
);
export default MyComponent;
