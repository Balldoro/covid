import React, { useEffect } from "react";
import { Card, CardTitle } from "../DashboardStyles";
import { Chart } from "chart.js";
import { ChartWrapper } from "./StatisticsStyles";

function Statistics({ confirmed, active, recovered, deaths }) {
  const cnv = "stats-chart";
  useEffect(() => {
    const activePercentage = (active / confirmed) * 100;
    const recoveredPercentage = (recovered / confirmed) * 100;
    const deathsPercentage = (deaths / confirmed) * 100;
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
          text: "Proportions in %",
          fontColor: "#fff",
          fontFamily: "Arial",
          fontSize: "16"
        }
      }
    });
    return () => statsChart.destroy();
  }, [confirmed, active, recovered, deaths]);
  return (
    <Card>
      <CardTitle>Statistics</CardTitle>
      <ChartWrapper>
        <canvas id={cnv} />
      </ChartWrapper>
    </Card>
  );
}

export default Statistics;
