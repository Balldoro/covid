import React, { useState, useEffect } from "react";
import { Wrapper } from "./WorldStyles";
import Cases from "../Cases/Cases";
import { fetchGlobalData } from "../../../api";
import MostInfected from "../MostInfected/MostInfected";
import Statistics from "../Statistics/Statistics";

function World() {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [mostInfected, setMostInfected] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const { cases, newCases, mostInfected } = await fetchGlobalData();
      setNewCases(newCases);
      setCases(cases);
      setMostInfected(mostInfected);
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
      <Statistics cases={cases} newCases={newCases} />
      <MostInfected countries={mostInfected} />
    </Wrapper>
  );
}

export default World;
