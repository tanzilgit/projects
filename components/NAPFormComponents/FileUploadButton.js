import { useEffect } from 'react';
import styled from 'styled-components'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Container = styled.div`
  position: relative;
  border: 1px solid #aaa;
  padding: 9px;
  border-radius: 6px;
  display: inline-flex;
  .file-input{
    display: none;
  }
  .input-btn,.MuiButton-containedPrimary:hover{
    background-color: #0072bc;
  }
  .placeholder{
    position: absolute;
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 45%;
    display: inline-block;
  }
  .remove{
    position: absolute;
    right: 0;
    margin: 8px;
    cursor: pointer;
    &:hover{
      opacity: 0.5;
    }
  }
`;

function FileUploadButton({name, helperText, multiple, onChange, children, formik, accept, value, ...otherProps}) {
  useEffect(() => {
    if(typeof(value) == "string"){
      formik.setFieldError(name, {file: 'Upload required file'})
    } else{
      if(accept){
        let supportedFormat = accept.split(",").map(item => item.trim());
        if(!supportedFormat.includes(`.${value?.name?.split(".")[value?.name?.split(".").length - 1]}`)){
          formik.setFieldError(name, {file: 'Invalid file format'})
        }
      }
    }
  }, [formik?.isValidating])

  function handleUpload({target}) {
    const files = target.files[0];
    if(formik){
      formik.setFieldValue(name, files)
    }
    target.value = ''
  }
  function handleRemove(){
    formik.setFieldValue(name, formik.initialValues[name])
  }
  return (
    <Container>
      <input
        accept={accept}
        className="file-input"
        id={name}
        multiple={multiple}
        type="file"
        onChange={handleUpload}
        {...otherProps}
      />
      <label htmlFor={name}>
        <Button
          component="span"
          variant="contained"
          color="primary"
          className="input-btn"
          startIcon={<AttachFileIcon />}
        >
          Upload
        </Button>
      </label>
      <span className="placeholder">{typeof(value) == "string" ? value : value?.name}</span>
      {typeof(value) == "string" ? null : <HighlightOffIcon className='remove' onClick={() => handleRemove()} />}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Container>
  )
}

FileUploadButton.defaultProps = {
  name: 'contained-button-file',
  accept: "image/*"
}
export default FileUploadButton

// /**
//  * Component to display thumbnail of image.
//  */
// const ImageThumb = ({ image }) => {
//   return <img src={URL.createObjectURL(image)} alt={image.name} width={50} />;
// };