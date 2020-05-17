import React, { useEffect, useState } from "react";
import { Wrapper } from "./CountriesStyles";
import { fetchAllCountries } from "../../../api";
import CountriesList from "../CountriesList/CountriesList";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchAllCountries();
      setCountries(data);
    };
    fetchAPI();
  }, []);
  return (
    <Wrapper>
      <CountriesList countries={countries} />
    </Wrapper>
  );
}

export default Countries;
