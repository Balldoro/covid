import React, { useEffect, useState } from "react";
import {
  fetchSelectedCountry,
  fetchDailyOfSelectedCountry
} from "../../../api";
import Cases from "../Cases/Cases";
import Statistics from "../Statistics/Statistics";
import { Wrapper } from "./SelectedCountryStyles";
import LineChart from "../LineChart/LineChart";

function SelectedCountry({ match }) {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [dailyConfirmed, setDailyConfirmed] = useState([]);
  const [dailyActive, setDailyActive] = useState([]);
  const [dailyRecovered, setDailyRecovered] = useState([]);
  const [dailyDeaths, setDailyDeaths] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const { cases, newCases } = await fetchSelectedCountry(match.params.slug);
      setCases(cases);
      setNewCases(newCases);
    };
    fetchAPI();
  }, [match]);
  useEffect(() => {
    const fetchAPI = async () => {
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
    };
    fetchAPI();
  }, [match]);
  return (
    <Wrapper>
      <Cases cases={cases} newCases={newCases} />
      <Statistics cases={cases} newCases={newCases} />
    </Wrapper>
  );
}

export default SelectedCountry;
