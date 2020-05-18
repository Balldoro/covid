import React from "react";
import { Wrapper } from "./DashboardStyles";
import { Route } from "react-router-dom";
import World from "./World/World";
import Countries from "./Countries/Countries";
import SelectedCountry from "./SelectedCountry/SelectedCountry";

function Dashboard() {
  return (
    <Wrapper>
      <Route path="/global" component={World} />
      <Route path="/countries" exact component={Countries} />
      <Route path="/countries/:slug" component={SelectedCountry} />
    </Wrapper>
  );
}

export default Dashboard;
