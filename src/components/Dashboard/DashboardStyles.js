import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1480px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 85px;
  @media (min-width: 600px) {
    padding-bottom: 1rem;
  }
`;

export const Card = styled.section`
  background-color: #1e1e1e;
  color: #fff;
  padding: 1rem;
  border-radius: 14px;
  min-width: 0;
`;

export const CardTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 1rem;
`;

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
