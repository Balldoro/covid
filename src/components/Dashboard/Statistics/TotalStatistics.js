import React, { useEffect } from "react";
import { ChartWrapper } from "./StatisticsStyles";
import { Chart } from "chart.js";
import getPercentage from "../../helpers/getPercentage";

function TotalStatistics({
  cases: { TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths }
}) {
  const cnv = "stats-chart";
  useEffect(() => {
    const activePercentage = getPercentage(TotalAffected, TotalConfirmed);
    const recoveredPercentage = getPercentage(TotalRecovered, TotalConfirmed);
    const deathsPercentage = getPercentage(TotalDeaths, TotalConfirmed);
    const statsChart = new Chart(cnv, {
      type: "pie",
      data: {
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Proportions",
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
  }, [TotalConfirmed, TotalAffected, TotalRecovered, TotalDeaths]);
  return (
    <ChartWrapper>
      <canvas id={cnv} />
    </ChartWrapper>
  );
}

export default TotalStatistics;
