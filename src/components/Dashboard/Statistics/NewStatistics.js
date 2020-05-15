import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { ChartWrapper } from "./StatisticsStyles";

function NewCases({
  cases: { AllNewCases, NewConfirmed, NewRecovered, NewDeaths }
}) {
  const cnv = "stats-chart";
  useEffect(() => {
    const activePercentage = (NewConfirmed / AllNewCases) * 100;
    const recoveredPercentage = (NewRecovered / AllNewCases) * 100;
    const deathsPercentage = (NewDeaths / AllNewCases) * 100;
    const statsChart = new Chart(cnv, {
      type: "pie",
      data: {
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "New cases",
            data: [
              activePercentage.toFixed(2),
              recoveredPercentage.toFixed(2),
              deathsPercentage.toFixed(2)
            ],
            backgroundColor: ["#0364a5", "#198200", "#a70303"],
            borderColor: ["#0364a5", "#198200", "#a70303"],
            hoverBackgroundColor: ["#007cd0", "#24b701", "#c70000"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        title: {
          display: true,
          text: "New cases proportion in %",
          fontColor: "#fff",
          fontFamily: "Arial",
          fontSize: "16",
          fontStyle: "normal"
        }
      }
    });
    return () => statsChart.destroy();
  }, [AllNewCases, NewConfirmed, NewRecovered, NewDeaths]);
  return (
    <ChartWrapper>
      {console.log(NewRecovered, NewConfirmed)}
      <canvas id={cnv} />
    </ChartWrapper>
  );
}

export default NewCases;
