export const fetchGlobalData = async () => {
  try {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    const cases = getCasesFrom(data.Global);
    const mostInfected = getMostInfectedFrom(data.Countries);
    return { cases, mostInfected };
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

const getMostInfectedFrom = data => {
  const amountOfTopCountries = 6;
  const mostInfected = data
    .sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1))
    .slice(0, amountOfTopCountries);
  return { mostInfected };
};
