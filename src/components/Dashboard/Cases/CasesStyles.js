import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 980px) {
    gap: 1.5rem;
  }
`;

export const Case = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: ${props =>
    props.confirmed
      ? "#790a98"
      : props.active
      ? "#03568e"
      : props.recovered
      ? "#198200"
      : "#a70303"};
  color: #fff;
`;

export const CaseTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const CaseCounter = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  display: inline-block;
  width: 100%;
  text-align: center;
`;
