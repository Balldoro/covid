import React, { useEffect, useState } from "react";
import { fetchDailyOfSelectedCountry } from "../../../api";
import Cases from "../Cases/Cases";
import Statistics from "../Statistics/Statistics";
import {
  Wrapper,
  BlankCountry,
  BlankTitle,
  BlankLink,
  GoBackArrow
} from "./SelectedCountryStyles";
import LineChart from "../LineChart/LineChart";
import { SpinnerWrapper, Spinner } from "../DashboardStyles";
import { FaArrowLeft } from "react-icons/fa";

function SelectedCountry({ match }) {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [dailyConfirmed, setDailyConfirmed] = useState([]);
  const [dailyActive, setDailyActive] = useState([]);
  const [dailyRecovered, setDailyRecovered] = useState([]);
  const [dailyDeaths, setDailyDeaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      const calculateCases = lastDay => {
        const TotalConfirmed = lastDay.Confirmed;
        const TotalRecovered = lastDay.Recovered;
        const TotalDeaths = lastDay.Deaths;
        const TotalAffected = TotalConfirmed - TotalDeaths - TotalRecovered;
        return { TotalAffected, TotalConfirmed, TotalRecovered, TotalDeaths };
      };
      const calculateNewCases = (lastDay, dayBefore) => {
        const NewConfirmed = lastDay.Confirmed - dayBefore.Confirmed;
        const NewRecovered = lastDay.Recovered - dayBefore.Recovered;
        const NewDeaths = lastDay.Deaths - dayBefore.Deaths;
        const AllNewCases = NewConfirmed + NewRecovered + NewDeaths;
        return { AllNewCases, NewConfirmed, NewRecovered, NewDeaths };
      };
      const fetchAPI = async () => {
        setIsLoading(true);
        const data = await fetchDailyOfSelectedCountry(match.params.slug);
        if (data.length !== 0) {
          setCases(calculateCases(data[data.length - 1]));
          setNewCases(
            calculateNewCases(data[data.length - 1], data[data.length - 2])
          );
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
        }
        setIsLoading(false);
      };
      fetchAPI();
    }
    return () => setIsMounted(false);
  }, [match, isMounted]);
  return (
    <Wrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : Object.keys(cases).length !== 0 ? (
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
      ) : (
        <BlankCountry>
          <BlankTitle>No cases noted in that country</BlankTitle>
          <BlankLink to="/countries">
            Go back to countries
            <GoBackArrow>
              <FaArrowLeft />
            </GoBackArrow>
          </BlankLink>
        </BlankCountry>
      )}
    </Wrapper>
  );
}

export default SelectedCountry;
