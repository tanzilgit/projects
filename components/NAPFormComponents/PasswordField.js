import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {isPasswordValid} from '@utils/validationUtils'

function PasswordField({value, ...otherProps}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl variant="outlined">
      <InputLabel error={value && !isPasswordValid(value)} htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        error={value && !isPasswordValid(value)}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
        
      />
      <FormHelperText error={value && !isPasswordValid(value)}>Must be atleast 8 character,1 letter,1 number</FormHelperText>
    </FormControl>
  )
}

export default PasswordField
