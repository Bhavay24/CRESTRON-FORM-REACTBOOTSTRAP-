import React, { useState } from "react";
import "./formInput.css";
const FormInput = (props) => {
  //here I am passing props so data can be accessed by the children of REACT component(code-reusability).
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      {<label>{label}</label>}
      <input
        {...inputProps} //... -> Spread operator
        onChange={onChange} //so when we change something, it will run these function mentioned above.
        onBlur={handleFocus}
        focused={focused.toString()} //the value was in boolean so we changed to string.
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;
