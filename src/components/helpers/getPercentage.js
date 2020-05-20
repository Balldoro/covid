function getPercentage(numberToDivide, divider) {
  const percentage = (numberToDivide / divider) * 100;
  return percentage.toFixed(2);
}

export default getPercentage;
