import InputField from "./InputField"
import { isEmailValid } from '@utils/validationUtils'

function EmailField({value, errorMessage ,...props}) {
  return (
    <InputField
      defaultValue={value && value}
      value={value}
      error={value && !isEmailValid(value)}
      variant="outlined"
      helperText={value && !isEmailValid(value) && errorMessage }
      {...props}
    />
  )
}

EmailField.defaultProps = {
  label: 'Email',
  errorMessage: "Please enter a valid email address"
}

export default EmailField
