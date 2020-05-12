import React, { useState, useEffect } from "react";
import { Wrapper } from "./WorldStyles";
import Cases from "../Cases/Cases";
import { fetchGlobalData } from "../../../api";

function World() {
  const [cases, setCases] = useState({});
  const [mostInfected, setMostInfected] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const { cases, topCountries } = await fetchGlobalData();
      setCases(cases);
      setMostInfected(topCountries);
    };
    fetchAPI();
  }, []);
  return (
    <Wrapper>
      <Cases
        confirmed={cases.TotalConfirmed}
        active={cases.TotalAffected}
        recovered={cases.TotalRecovered}
        deaths={cases.TotalDeaths}
      />
    </Wrapper>
  );
}

export default World;
