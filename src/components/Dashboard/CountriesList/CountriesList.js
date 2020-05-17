import React from "react";
import { Card, CardTitle } from "../DashboardStyles";
import { FaSearch } from "react-icons/fa";
import {
  Filter,
  FilterLabel,
  FilterInput,
  List,
  ListItem,
  LinkWrapper,
  FlagImg
} from "./CountriesListStyles";

function CountriesList({ countries }) {
  return (
    <Card>
      <CardTitle>All countries</CardTitle>
      <Filter>
        <FilterLabel>
          <FaSearch />
          <FilterInput />
        </FilterLabel>
      </Filter>
      <List>
        {countries.map(country => (
          <ListItem key={country.ISO2}>
            <LinkWrapper to={`/countries/${country.Slug}`}>
              <FlagImg
                src={`https://www.countryflags.io/${country.ISO2}/shiny/32.png`}
                alt={country.Country}
              />
              {country.Country}
            </LinkWrapper>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default CountriesList;
