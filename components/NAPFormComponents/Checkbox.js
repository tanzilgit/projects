import styled from "styled-components"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-colorPrimary.Mui-checked{
    color: #0072bc;
  }
  .MuiSvgIcon-root{
    font-size: 28px;
  }
`;

function CheckBox({name, checked, label,className, onChange, ...otherProps}) {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          checked={checked}
          name={name}
          color="primary"
          className={className}
          onChange={onChange}
        />
      }
      label={label}
      className={className}
      {...otherProps}
    />
  )
}

CheckBox.defaultProps = {
  label: "Nap Checkbox",
  name: 'default'
}

export default CheckBox
