import * as React from 'react';
import styled from 'styled-components';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export const StyledInput = styled(TextareaAutosize)`
  font-family: 'ProximaNova Regular';
`;

function TextAreaField({ ...otherProps }) {
  return (
    <div>
      {/* <StyledInput id='StyledInputID'
        aria-label="minimum height"
        minRows={3}
        placeholder="Meta Descriptions"
        {...otherProps} /> */}
      <TextareaAutosize 
        aria-label="minimum height" 
        minRows={10} 
        placeholder="Minimum 3 rows"
      />

    </div>

  )
}

export default TextAreaField
