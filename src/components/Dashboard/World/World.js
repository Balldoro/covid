import React, { useState, useEffect } from "react";
import { Wrapper } from "./WorldStyles";
import Cases from "../Cases/Cases";
import { fetchGlobalData } from "../../../api";
import MostInfected from "./MostInfected/MostInfected";
import Statistics from "../Statistics/Statistics";
import { SpinnerWrapper, Spinner } from "../DashboardStyles";

function World() {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [mostInfected, setMostInfected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      const fetchAPI = async () => {
        setIsLoading(true);
        const { cases, newCases, mostInfected } = await fetchGlobalData();
        setNewCases(newCases);
        setCases(cases);
        setMostInfected(mostInfected);
        setIsLoading(false);
      };
      fetchAPI();
    }
    return () => setIsMounted(false);
  }, [isMounted]);
  return (
    <Wrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <Cases cases={cases} newCases={newCases} />
          <Statistics cases={cases} newCases={newCases} />
          <MostInfected countries={mostInfected} />
        </>
      )}
    </Wrapper>
  );
}

export default World;
