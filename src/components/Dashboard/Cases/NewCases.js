import React from "react";
import { Case, CaseTitle, CaseCounter } from "./CasesStyles";
import CountUp from "react-countup";

function NewCases({
  cases: { AllNewCases, NewConfirmed, NewRecovered, NewDeaths }
}) {
  return (
    <>
      <Case confirmed>
        {console.log(NewConfirmed, NewDeaths)}
        <CaseTitle>All</CaseTitle>
        <CaseCounter>
          <CountUp start={0} duration={3} separator="," end={AllNewCases} />
        </CaseCounter>
      </Case>
      <Case active>
        <CaseTitle>Active</CaseTitle>
        <CaseCounter>
          <CountUp start={0} duration={3} separator="," end={NewConfirmed} />
        </CaseCounter>
      </Case>
      <Case recovered>
        <CaseTitle>Recovered</CaseTitle>
        <CaseCounter>
          <CountUp start={0} duration={3} separator="," end={NewRecovered} />
        </CaseCounter>
      </Case>
      <Case deaths>
        <CaseTitle>Deaths</CaseTitle>
        <CaseCounter>
          <CountUp start={0} duration={3} separator="," end={NewDeaths} />
        </CaseCounter>
      </Case>
    </>
  );
}

export default NewCases;
