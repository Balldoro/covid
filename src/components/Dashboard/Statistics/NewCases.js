import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { ChartWrapper } from "./StatisticsStyles";

function NewCases({
  cases: { AllNewCases, NewConfirmed, NewRecovered, NewDeaths }
}) {
  const cnv = "stats-chart";
  useEffect(() => {
    const statsChart = new Chart(cnv, {
      type: "pie",
      data: {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "New cases",
            data: [NewConfirmed, NewRecovered, NewDeaths],
            backgroundColor: [
              "rgba(3, 86, 142, 0.8)",
              "rgba(25, 130, 0, 0.8)",
              "rgba(167, 3, 3, 0.8)"
            ],
            borderColor: ["#0364a5", "#198200", "#a70303"],
            hoverBackgroundColor: ["#0364a5", "#198200", "#a70303"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        title: {
          display: true,
          text: "New cases proportion",
          fontColor: "#fff",
          fontFamily: "Arial",
          fontSize: "16"
        }
      }
    });
    return () => statsChart.destroy();
  }, [NewConfirmed, NewRecovered, NewDeaths]);
  return (
    <ChartWrapper>
      {console.log(NewRecovered, NewConfirmed)}
      <canvas id={cnv} />
    </ChartWrapper>
  );
}

export default NewCases;
