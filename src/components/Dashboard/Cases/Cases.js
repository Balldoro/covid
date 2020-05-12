import React from "react";
import { Card } from "../DashboardStyles";
import { Wrapper, Case, CaseTitle, CaseCounter } from "./CasesStyles";

function Cases({ confirmed, active, recovered, deaths }) {
  return (
    <Card>
      <Wrapper>
        <Case confirmed>
          <CaseTitle>Confirmed</CaseTitle>
          <CaseCounter>{confirmed}</CaseCounter>
        </Case>
        <Case active>
          <CaseTitle>Active</CaseTitle>
          <CaseCounter>{active}</CaseCounter>
        </Case>
        <Case recovered>
          <CaseTitle>Recovered</CaseTitle>
          <CaseCounter>{recovered}</CaseCounter>
        </Case>
        <Case deaths>
          <CaseTitle>Deaths</CaseTitle>
          <CaseCounter>{deaths}</CaseCounter>
        </Case>
      </Wrapper>
    </Card>
  );
}

export default Cases;
