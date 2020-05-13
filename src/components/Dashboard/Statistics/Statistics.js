import React, { useState } from "react";
import { Card, CardTitle } from "../DashboardStyles";
import NewCases from "./NewCases";
import TotalCases from "./TotalCases";
import { Button, Navigation } from "./StatisticsStyles";

function Statistics({ cases, newCases }) {
  const [activeButton, setActiveButton] = useState("total");
  return (
    <Card>
      <CardTitle>Statistics</CardTitle>
      <Navigation>
        <Button
          active={activeButton === "total" ? true : false}
          onClick={() => setActiveButton("total")}
        >
          Total
        </Button>
        <Button
          active={activeButton === "new" ? true : false}
          onClick={() => setActiveButton("new")}
        >
          New
        </Button>
      </Navigation>
      {console.log(newCases)}
      {activeButton === "total" ? (
        <TotalCases cases={cases} />
      ) : (
        <NewCases cases={newCases} />
      )}
    </Card>
  );
}

export default Statistics;
