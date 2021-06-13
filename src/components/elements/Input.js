import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_label, field_placeholder }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {field_label}
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={field_placeholder ? field_placeholder : ""}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Input;
