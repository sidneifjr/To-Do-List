export const convertToRem = (value: number) => {
  let browserDefaultFontSize = 16;
  let valueConverted = value / browserDefaultFontSize + "rem";

  return valueConverted;
};
