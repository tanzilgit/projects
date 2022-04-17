import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'
import InputField from './InputField'

function Dropdown({children, ...otherProps}) {
  return (
    <InputField select {...otherProps}>
      {children.map((child, index) => (
        <MenuItem key={index} value={child}>{child}</MenuItem>
      ))}
    </InputField>
  )
}

Dropdown.defaultProps = {
  children: ["Option"]
}

export default Dropdown
