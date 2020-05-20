import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1280px;
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
  @media (min-width: 980px) {
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 1.5rem;
  @media (min-width: 980px) {
    font-size: 1.2rem;
  }
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
  margin-bottom: 1.5rem;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  grid-column: 1/-1;
  display: block;
  width: 72px;
  height: 72px;
  margin: auto;
  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: spinner-rotate 1.2s linear infinite;
  }
  @keyframes spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
