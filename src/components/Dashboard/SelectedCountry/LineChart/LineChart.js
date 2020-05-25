import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { CardTitle } from "../../DashboardStyles";
import { ChartWrapper, LineChartCard } from "./LineChartStyles";

function LineChart({
  dailyData: { DailyConfirmed, DailyActive, DailyRecovered, DailyDeaths }
}) {
  const cnv = "daily-chart";
  useEffect(() => {
    const dailyChart = new Chart(cnv, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Confirmed",
            data: DailyConfirmed,
            borderColor: ["#790a98"],
            borderCapStyle: "round",
            borderJoinStyle: "round",
            pointBackgroundColor: "rgb(182, 31, 224)",
            hoverBackgroundColor: ["#790a98"],
            pointHoverRadius: 5,
            borderWidth: 6,
            fill: false
          },
          {
            label: "Active",
            data: DailyActive,
            borderColor: ["#03568e"],
            borderCapStyle: "round",
            borderJoinStyle: "round",
            pointBackgroundColor: "rgb(22, 129, 201)",
            hoverBackgroundColor: ["#03568e"],
            pointHoverRadius: 5,
            borderWidth: 6,
            fill: false
          },
          {
            label: "Recovered",
            data: DailyRecovered,
            borderColor: ["#198200"],
            borderCapStyle: "round",
            borderJoinStyle: "round",
            pointBackgroundColor: "rgb(47, 184, 15)",
            hoverBackgroundColor: ["#198200"],
            pointHoverRadius: 5,
            borderWidth: 6,
            fill: false
          },
          {
            label: "Deaths",
            data: DailyDeaths,
            borderColor: ["#a70303"],
            borderCapStyle: "round",
            borderJoinStyle: "round",
            pointBackgroundColor: "rgb(230, 46, 46)",
            hoverBackgroundColor: ["#a70303"],
            pointHoverRadius: 5,
            borderWidth: 6,
            fill: false
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
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                isoWeekday: true,
                unit: "week",
                parser: "MM DD",
                displayFormats: {
                  week: "MM DD"
                }
              }
            }
          ]
        }
      }
    });
    return () => dailyChart.destroy();
  }, [DailyActive, DailyConfirmed, DailyRecovered, DailyDeaths]);
  return (
    <LineChartCard>
      <CardTitle>Daily Cases</CardTitle>
      <ChartWrapper>
        <canvas id={cnv} />
      </ChartWrapper>
    </LineChartCard>
  );
}

export default LineChart;
