export const isEmailValid = (mail) => {
  if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail))
    return true;
  else return false;
}
export const isFullNameValid = (name) => {
  if(/^([\w]{3,})+\s+([\w\s]{2,})+$/i.test(name))
    return true;
  else return false;
}
export const isPhoneNumberValid = (number) => {
  if(/^\\+(?:[0-9] ?){6,14}[0-9]$/.test(number))
    return true;
  else return false;
}
export const isPasswordValid = (pass) => {
  if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass))
    return true;
  else return false;
}

export const isUrlValid = (url) => {
  if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/.test(url))
    return true;
  else return false;
}

export const checkIfFilesAreTooBig =(file, limit) => {
  let valid = true
  const size = file.size / 1024 / 1024;
  if (size > limit) {
    valid = false
  }
  return valid
}