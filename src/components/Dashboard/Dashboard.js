import React from "react";
import { Wrapper } from "./DashboardStyles";
import { Route } from "react-router-dom";
import World from "./World/World";
import Countries from "./Countries/Countries";

function Dashboard() {
  return (
    <Wrapper>
      <Route path="/global" component={World} />
      <Route path="/countries" component={Countries} />
    </Wrapper>
  );
}

export default Dashboard;
