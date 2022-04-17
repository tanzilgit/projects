import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-root {
    background: #fff;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #0072bc;
    width: 100%;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #0072bc;
  }
  .MuiFormLabel-root.Mui-error {
    color: #f44336;
  }
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
  .MuiSelect-select:focus {
    background-color: #fff;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

function InputField({ ...otherProps }) {
  return <StyledInput variant="outlined" {...otherProps} />;
}

export default InputField;
