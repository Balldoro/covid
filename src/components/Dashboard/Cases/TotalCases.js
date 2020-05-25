import React from "react";
import { Case, CaseTitle, CaseCounter } from "./CasesStyles";
import CountUp from "react-countup";
function TotalCases({
  cases: { TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths }
}) {
  return (
    <>
      {TotalConfirmed ? (
        <>
          <Case confirmed>
            <CaseTitle>All</CaseTitle>
            <CaseCounter>
              <CountUp
                start={0}
                duration={3}
                separator=" "
                end={TotalConfirmed}
              />
            </CaseCounter>
          </Case>
          <Case active>
            <CaseTitle>Active</CaseTitle>
            <CaseCounter>
              <CountUp
                start={0}
                duration={3}
                separator=" "
                end={TotalAffected}
              />
            </CaseCounter>
          </Case>
          <Case recovered>
            <CaseTitle>Recovered</CaseTitle>
            <CaseCounter>
              <CountUp
                start={0}
                duration={3}
                separator=" "
                end={TotalRecovered}
              />
            </CaseCounter>
          </Case>
          <Case deaths>
            <CaseTitle>Deaths</CaseTitle>
            <CaseCounter>
              <CountUp start={0} duration={3} separator=" " end={TotalDeaths} />
            </CaseCounter>
          </Case>
        </>
      ) : null}
    </>
  );
}

export default TotalCases;
