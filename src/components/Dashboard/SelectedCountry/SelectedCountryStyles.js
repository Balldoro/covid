import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 980px) {
    gap: 2.5rem;
  }
`;

export const BlankCountry = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1/-1;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlankTitle = styled.p`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  @media (min-width: 860px) {
    font-size: 3.2rem;
  }
`;

export const BlankLink = styled(Link)`
  font-size: 1.5rem;
  color: #23b400;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 860px) {
    font-size: 2rem;
  }
`;

export const GoBackArrow = styled.span`
  font-size: 1.8rem;
  animation: slide 1.6s ease-out 1;
  @media (min-width: 860px) {
    font-size: 2.2rem;
  }
  @keyframes slide {
    0% {
      transform: translateX(60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
