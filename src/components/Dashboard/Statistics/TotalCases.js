import React, { useEffect } from "react";
import { ChartWrapper } from "./StatisticsStyles";
import { Chart } from "chart.js";

function TotalCases({
  cases: { TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths }
}) {
  const cnv = "stats-chart";
  useEffect(() => {
    const activePercentage = (TotalAffected / TotalConfirmed) * 100;
    const recoveredPercentage = (TotalRecovered / TotalConfirmed) * 100;
    const deathsPercentage = (TotalDeaths / TotalConfirmed) * 100;
    const statsChart = new Chart(cnv, {
      type: "pie",
      data: {
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Proportions",
            data: [
              activePercentage.toFixed(2),
              recoveredPercentage.toFixed(2),
              deathsPercentage.toFixed(2)
            ],
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
          text: "Total cases proportion in %",
          fontColor: "#fff",
          fontFamily: "Arial",
          fontSize: "16"
        }
      }
    });
    return () => statsChart.destroy();
  }, [TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths]);
  return (
    <ChartWrapper>
      <canvas id={cnv} />
    </ChartWrapper>
  );
}

export default TotalCases;
