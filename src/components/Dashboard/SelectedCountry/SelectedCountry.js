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
import {
  calculateTotalCases,
  calculateNewCases,
  getDailyData
} from "../../helpers/functions";

function SelectedCountry({ match }) {
  const [cases, setCases] = useState({});
  const [newCases, setNewCases] = useState({});
  const [dailyData, setDailyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      const fetchAPI = async () => {
        setIsLoading(true);
        const data = await fetchDailyOfSelectedCountry(match.params.slug);
        if (data.length !== 0) {
          const lastDay = data[data.length - 1];
          const dayBefore = data[data.length - 2];
          setCases(calculateTotalCases(lastDay));
          setNewCases(calculateNewCases(lastDay, dayBefore));
          setDailyData(getDailyData(data));
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
          <LineChart dailyData={dailyData} />
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
