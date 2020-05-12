import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2rem;
`;

export const Case = styled.div`
  padding: 14px;
  border-radius: 10px;
  background-color: ${props =>
    props.affected
      ? "#790a98"
      : props.active
      ? "#03568e"
      : props.recovered
      ? "#198200"
      : "#a70303"};
  color: #fff;
  margin: 0.6rem 0;
`;

export const CaseTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
`;

export const CaseCounter = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  display: inline-block;
  width: 100%;
  text-align: center;
`;
