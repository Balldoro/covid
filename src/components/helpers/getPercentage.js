function getPercentage(numberToDivide, divider) {
  if (divider !== 0) {
    const percentage = (numberToDivide / divider) * 100;
    return percentage.toFixed(2);
  } else {
    return 0;
  }
}

export default getPercentage;
