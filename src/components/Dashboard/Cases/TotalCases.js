import React from "react";
import { Case, CaseTitle, CaseCounter } from "./CasesStyles";

function TotalCases({
  cases: { TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths }
}) {
  return (
    <>
      <Case confirmed>
        <CaseTitle>All</CaseTitle>
        <CaseCounter>{TotalConfirmed}</CaseCounter>
      </Case>
      <Case active>
        <CaseTitle>Active</CaseTitle>
        <CaseCounter>{TotalAffected}</CaseCounter>
      </Case>
      <Case recovered>
        <CaseTitle>Recovered</CaseTitle>
        <CaseCounter>{TotalRecovered}</CaseCounter>
      </Case>
      <Case deaths>
        <CaseTitle>Deaths</CaseTitle>
        <CaseCounter>{TotalDeaths}</CaseCounter>
      </Case>
    </>
  );
}

export default TotalCases;
