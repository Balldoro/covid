export const fetchGlobalData = async () => {
  try {
    const response = await fetch("https://api.covid19api.com/summary");
    if (response.ok) {
      const data = await response.json();
      const cases = getCasesFrom(data.Global);
      const newCases = getNewCasesFrom(data.Global);
      const mostInfected = getMostInfectedFrom(data.Countries);
      return { cases, newCases, mostInfected };
    } else {
      window.location.reload(true);
    }
  } catch (error) {
    console.error(error);
  }
};

const getCasesFrom = ({ TotalConfirmed, TotalRecovered, TotalDeaths }) => {
  const TotalAffected = TotalConfirmed - TotalRecovered - TotalDeaths;
  return {
    TotalAffected,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths
  };
};
const getNewCasesFrom = ({ NewConfirmed, NewRecovered, NewDeaths }) => {
  const AllNewCases = NewConfirmed + NewRecovered + NewDeaths;
  return { AllNewCases, NewConfirmed, NewRecovered, NewDeaths };
};

const getMostInfectedFrom = data => {
  const amountOfTopCountries = 10;
  const mostInfected = data
    .sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1))
    .slice(0, amountOfTopCountries);
  return mostInfected;
};

export const fetchAllCountries = async () => {
  try {
    const response = await fetch("https://api.covid19api.com/countries");
    const data = await response.json();
    return data.sort((a, b) => (a.Country > b.Country ? 1 : -1));
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyOfSelectedCountry = async countrySlug => {
  try {
    const response = await fetch(
      `https://api.covid19api.com/total/dayone/country/${countrySlug}`
    );
    const data = await response.json();
    const dailyData = data
      .filter(item => item.Confirmed !== 0)
      .map(day => ({
        Date: day.Date,
        Deaths: day.Deaths,
        Recovered: day.Recovered,
        Active: day.Active,
        Confirmed: day.Confirmed
      }));
    return dailyData;
  } catch (error) {
    console.error(error);
  }
};
