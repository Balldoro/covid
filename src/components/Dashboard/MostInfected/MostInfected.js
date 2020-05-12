import React from "react";
import { Card, CardTitle } from "../DashboardStyles";
import { ListItem, CountryName, CountryInfo } from "./MostInfectedStyles";

function MostInfected({ countries }) {
  return (
    <Card>
      <CardTitle>Most infected countries</CardTitle>
      <ul>
        {countries.map(country => (
          <ListItem key={country.CountryCode}>
            <CountryInfo>
              <img
                src={`https://www.countryflags.io/${country.CountryCode}/shiny/24.png`}
                alt={country.Slug}
              />
              <CountryName>{country.Country}</CountryName>
            </CountryInfo>
            <span>{country.TotalConfirmed}</span>
          </ListItem>
        ))}
      </ul>
    </Card>
  );
}
export default MostInfected;
