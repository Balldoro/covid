import React from "react";
import { Card } from "../DashboardStyles";
import { Wrapper, Case, CaseTitle, CaseCounter } from "./CasesStyles";

function Cases() {
  return (
    <Card>
      <Wrapper>
        <Case affected>
          <CaseTitle>Affected</CaseTitle>
          <CaseCounter>150,986</CaseCounter>
        </Case>
        <Case active>
          <CaseTitle>Active</CaseTitle>
          <CaseCounter>150,986</CaseCounter>
        </Case>
        <Case recovered>
          <CaseTitle>Recovered</CaseTitle>
          <CaseCounter>150,986</CaseCounter>
        </Case>
        <Case deaths>
          <CaseTitle>Deaths</CaseTitle>
          <CaseCounter>150,986</CaseCounter>
        </Case>
      </Wrapper>
    </Card>
  );
}

export default Cases;
