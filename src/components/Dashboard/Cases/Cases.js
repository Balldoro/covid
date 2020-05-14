import React, { useState } from "react";
import { Card, CardTitle, Navigation, Button } from "../DashboardStyles";
import { Wrapper } from "./CasesStyles";
import TotalCases from "./TotalCases";
import NewCases from "./NewCases";

function Cases({ cases, newCases }) {
  const [activeButton, setActiveButton] = useState("total");
  return (
    <Card>
      <CardTitle>Cases</CardTitle>
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
      <Wrapper>
        {activeButton === "total" ? (
          <TotalCases cases={cases} />
        ) : (
          <NewCases cases={newCases} />
        )}
      </Wrapper>
    </Card>
  );
}

export default Cases;
