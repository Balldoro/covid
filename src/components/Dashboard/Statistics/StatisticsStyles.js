import styled from "styled-components";

export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  height: 100%;
`;

export const Chart = styled.canvas``;

export const Button = styled.button`
  border: none;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 85px;
  margin-right: 1.5rem;
  color: ${props => (props.active ? "#23b400" : "#fff")};
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  cursor: pointer;
`;

export const Navigation = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
