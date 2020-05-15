import React, { useEffect, useState } from "react";
import { Wrapper } from "./CountriesStyles";
import { fetchAllCountries } from "../../../api";
import { Card, CardTitle } from "../DashboardStyles";
import { Link } from "react-router-dom";

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
      <Card>
        <CardTitle>All countries</CardTitle>
        {countries ? (
          <ul>
            {countries.map(country => (
              <li>
                <Link to={`/countries/${country.Slug}`}>{country.Country}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <span>Loading...</span>
        )}
      </Card>
    </Wrapper>
  );
}

export default Countries;
