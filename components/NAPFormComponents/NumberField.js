import InputField from "./InputField"
import { isPhoneNumberValid } from '@utils/validationUtils';

function NumberField({value, errorMessage, ...props}) {
  return (
    <InputField
      value={value}
      error={value && !isPhoneNumberValid(value)}
      label="Phone" type="number" variant="outlined"
      helperText={value && !isPhoneNumberValid(value) && errorMessage }
      {...props}
    />
  )
}
NumberField.defaultProps = {
  errorMessage: "Invalid input"
}

export default NumberField
