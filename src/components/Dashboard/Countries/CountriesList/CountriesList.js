import React, { useState } from "react";
import { Card, CardTitle } from "../../DashboardStyles";
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
  const [searchWord, setSearchWord] = useState("");
  return (
    <Card>
      <CardTitle>All countries</CardTitle>
      <Filter>
        <FilterLabel>
          <FaSearch />
          <FilterInput
            value={searchWord}
            onChange={e => setSearchWord(e.target.value)}
          />
        </FilterLabel>
      </Filter>
      <List>
        {countries
          .filter(country =>
            new RegExp("^" + searchWord, "i").test(country.Country)
          )
          .map(country => (
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
