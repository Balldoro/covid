import styled from "styled-components";
import { Card } from "../../DashboardStyles";

export const MostInfectedCard = styled(Card)`
  @media (min-width: 860px) {
    grid-column: 2/-1;
    grid-row: 1/3;
  }
`;

export const ListItem = styled.li`
  font-family: Roboto, sans-serif;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 6px 0;
  border-radius: 10px;
  background-color: #272727;
  margin-bottom: 0.7rem;
  @media (min-width: 420px) {
    flex-direction: row;
    min-height: 60px;
    padding: 0 8px;
  }
  @media (min-width: 980px) {
    font-size: 1rem;
  }
`;

export const CountryName = styled.span`
  text-align: center;
  @media (min-width: 420px) {
    margin-left: 0.5rem;
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 420px) {
    flex-direction: row;
  }
`;

export const Infected = styled.span`
  @media (min-width: 980px) {
    font-size: 1.2rem;
  }
`;
