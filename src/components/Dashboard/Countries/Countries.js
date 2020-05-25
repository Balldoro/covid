import React, { useEffect, useState } from "react";
import { Wrapper } from "./CountriesStyles";
import { fetchAllCountries } from "../../../api";
import CountriesList from "./CountriesList/CountriesList";
import { SpinnerWrapper, Spinner } from "../DashboardStyles";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      const fetchAPI = async () => {
        setIsLoading(true);
        const data = await fetchAllCountries();
        setCountries(data);
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
        <CountriesList countries={countries} />
      )}
    </Wrapper>
  );
}

export default Countries;
