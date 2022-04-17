import styled from "styled-components"
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const StyledRadio = styled(Radio)`
  &.MuiRadio-colorPrimary.Mui-checked{
    color: #0072bc;
  }
`;

function RadioButton({...otherProps}) {
  return (
    <FormControlLabel
      control={
        <StyledRadio color="primary" />
      }
      {...otherProps}
    />
  )
}

export default RadioButton
