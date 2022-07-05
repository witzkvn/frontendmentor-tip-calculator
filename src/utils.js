export function getParsedRoundedNumber(number, digits = 0) {
  try {
    let parsedNumber = parseFloat(number).toFixed(digits) * 1;
    return parsedNumber;
  } catch (error) {
    console.error("An error has occured : ", error.message);
    return;
  }
}
