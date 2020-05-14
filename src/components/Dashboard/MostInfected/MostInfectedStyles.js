import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  font-family: Roboto, sans-serif;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 6px 0;
  border-top: 1px solid #2a2a2a;
  @media (min-width: 420px) {
    flex-direction: row;
    min-height: 60px;
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
