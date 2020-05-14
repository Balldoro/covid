import React from "react";
import { Case, CaseTitle, CaseCounter } from "./CasesStyles";

function NewCases({
  cases: { AllNewCases, NewConfirmed, NewRecovered, NewDeaths }
}) {
  return (
    <>
      <Case confirmed>
        {console.log(NewConfirmed, NewDeaths)}
        <CaseTitle>All</CaseTitle>
        <CaseCounter>{AllNewCases}</CaseCounter>
      </Case>
      <Case active>
        <CaseTitle>Active</CaseTitle>
        <CaseCounter>{NewConfirmed}</CaseCounter>
      </Case>
      <Case recovered>
        <CaseTitle>Recovered</CaseTitle>
        <CaseCounter>{NewRecovered}</CaseCounter>
      </Case>
      <Case deaths>
        <CaseTitle>Deaths</CaseTitle>
        <CaseCounter>{NewDeaths}</CaseCounter>
      </Case>
    </>
  );
}

export default NewCases;
