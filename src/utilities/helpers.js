export const numberFormatterFive = value => {
  // console.log('numberFormatter');
  if (!value) return 0;
  if (value % 5 > 0) {
    return Math.round(value / 5) * 5;
  } else {
    return value;
  }
};
