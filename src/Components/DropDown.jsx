import React from "react";
import Select from "react-select";

const options = [
  { value: "INR", label: "INR" },
  { value: "USD", label: "USD" },
];

const MyComponent = ({ currency, setCurrency }) => (
  <div>
    <select onChange={(e) => setCurrency(e.target.value)}>
      <option selected value="INR">
        INR
      </option>
      <option value="USD">USD</option>
    </select>
  </div>
);
export default MyComponent;
