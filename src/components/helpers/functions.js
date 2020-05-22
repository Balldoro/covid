export const getPercentage = (numberToDivide, divider) => {
  if (divider !== 0) {
    const percentage = (numberToDivide / divider) * 100;
    return percentage.toFixed(2);
  } else {
    return 0;
  }
};

export const getDailyData = data => {
  const DailyConfirmed = data.map(day => ({
    y: day.Confirmed,
    t: new Date(day.Date)
  }));
  const DailyActive = data.map(day => ({
    y: day.Active,
    t: new Date(day.Date)
  }));
  const DailyRecovered = data.map(day => ({
    y: day.Recovered,
    t: new Date(day.Date)
  }));
  const DailyDeaths = data.map(day => ({
    y: day.Deaths,
    t: new Date(day.Date)
  }));
  return { DailyConfirmed, DailyActive, DailyRecovered, DailyDeaths };
};

export const calculateNewCases = (lastDay, dayBefore) => {
  const NewConfirmed = lastDay.Confirmed - dayBefore.Confirmed;
  const NewRecovered = lastDay.Recovered - dayBefore.Recovered;
  const NewDeaths = lastDay.Deaths - dayBefore.Deaths;
  const AllNewCases = NewConfirmed + NewRecovered + NewDeaths;
  return { AllNewCases, NewConfirmed, NewRecovered, NewDeaths };
};

export const calculateTotalCases = lastDay => {
  const TotalConfirmed = lastDay.Confirmed;
  const TotalRecovered = lastDay.Recovered;
  const TotalDeaths = lastDay.Deaths;
  const TotalAffected = TotalConfirmed - TotalDeaths - TotalRecovered;
  return { TotalAffected, TotalConfirmed, TotalRecovered, TotalDeaths };
};
