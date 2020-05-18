import styled from "styled-components";
import { Card } from "../DashboardStyles";

export const ChartWrapper = styled.div`
  position: relative;
  min-height: 280px;
  height: 350px;
  width: 100%;
`;

export const LineChartCard = styled(Card)`
  height: 500px;
  @media (min-width: 860px) {
    grid-column: 1/-1;
  }
`;
