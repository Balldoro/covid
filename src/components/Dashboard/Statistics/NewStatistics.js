import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { ChartWrapper } from "./StatisticsStyles";
import { getPercentage } from "../../helpers/functions";

function NewCases({
  cases: { AllNewCases, NewConfirmed, NewRecovered, NewDeaths }
}) {
  const cnv = "stats-chart";
  useEffect(() => {
    const activePercentage = getPercentage(NewConfirmed, AllNewCases);
    const recoveredPercentage = getPercentage(NewRecovered, AllNewCases);
    const deathsPercentage = getPercentage(NewDeaths, AllNewCases);
    const statsChart = new Chart(cnv, {
      type: "pie",
      data: {
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "New cases",
            data: [activePercentage, recoveredPercentage, deathsPercentage],
            backgroundColor: ["#0364a5", "#198200", "#a70303"],
            borderColor: ["#0364a5", "#198200", "#a70303"],
            hoverBackgroundColor: ["#007cd0", "#24b701", "#c70000"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: "#fff",
            fontFamily: "'Arial','sans-serif'"
          }
        }
      }
    });
    return () => statsChart.destroy();
  }, [AllNewCases, NewConfirmed, NewRecovered, NewDeaths]);
  return (
    <ChartWrapper>
      <canvas id={cnv} />
    </ChartWrapper>
  );
}

export default NewCases;
