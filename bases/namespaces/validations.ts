namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
    // if (text.length > 3) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  export const validateDate = (fecha: Date): boolean => {
    return isNaN(fecha.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Fer"));
