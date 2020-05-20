import React, { useState } from "react";
import { Card, CardTitle, Navigation, Button } from "../DashboardStyles";
import NewStatistics from "./NewStatistics";
import TotalStatistics from "./TotalStatistics";

function Statistics({ cases, newCases }) {
  const [activeButton, setActiveButton] = useState("total");
  return (
    <Card>
      <CardTitle>Ratios</CardTitle>
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
      {activeButton === "total" ? (
        <TotalStatistics cases={cases} />
      ) : (
        <NewStatistics cases={newCases} />
      )}
    </Card>
  );
}

export default Statistics;
