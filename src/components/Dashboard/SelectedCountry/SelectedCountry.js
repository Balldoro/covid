import React, { useEffect, useState } from "react";
import {
  fetchSelectedCountry,
  fetchDailyOfSelectedCountry
} from "../../../api";
import Cases from "../Cases/Cases";
import Statistics from "../Statistics/Statistics";
import { Wrapper } from "./SelectedCountryStyles";
import LineChart from "../LineChart/LineChart";
import { SpinnerWrapper, Spinner } from "../DashboardStyles";

function SelectedCountry({ match }) {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [dailyConfirmed, setDailyConfirmed] = useState([]);
  const [dailyActive, setDailyActive] = useState([]);
  const [dailyRecovered, setDailyRecovered] = useState([]);
  const [dailyDeaths, setDailyDeaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const { cases, newCases } = await fetchSelectedCountry(match.params.slug);
      setCases(cases);
      setNewCases(newCases);
      setIsLoading(false);
    };
    fetchAPI();
  }, [match]);
  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const data = await fetchDailyOfSelectedCountry(match.params.slug);
      setDailyConfirmed(
        data.map(day => {
          return { y: day.Confirmed, t: new Date(day.Date) };
        })
      );
      setDailyActive(
        data.map(day => {
          return { y: day.Active, t: new Date(day.Date) };
        })
      );
      setDailyRecovered(
        data.map(day => {
          return { y: day.Recovered, t: new Date(day.Date) };
        })
      );
      setDailyDeaths(
        data.map(day => {
          return { y: day.Deaths, t: new Date(day.Date) };
        })
      );
      setIsLoading(false);
    };
    fetchAPI();
  }, [match]);
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
          <LineChart
            confirmed={dailyConfirmed}
            active={dailyActive}
            recovered={dailyRecovered}
            deaths={dailyDeaths}
          />
        </>
      )}
    </Wrapper>
  );
}

export default SelectedCountry;
