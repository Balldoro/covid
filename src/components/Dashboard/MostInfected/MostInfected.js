import React from "react";
import { CardTitle } from "../DashboardStyles";
import {
  ListItem,
  CountryName,
  CountryInfo,
  MostInfectedCard,
  Infected
} from "./MostInfectedStyles";
import CountUp from "react-countup";

function MostInfected({ countries }) {
  return (
    <MostInfectedCard>
      <CardTitle>Most infected countries</CardTitle>
      {countries ? (
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
              <Infected>
                <CountUp
                  start={0}
                  end={country.TotalConfirmed}
                  duration={3}
                  separator=","
                />
              </Infected>
            </ListItem>
          ))}
        </ul>
      ) : null}
    </MostInfectedCard>
  );
}
export default MostInfected;
