import styled from "styled-components";

export const Wrapper = styled.header`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  color: #fff;
  padding: 1rem 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  @media (min-width: 860px) {
    font-size: 2.2rem;
  }
`;

export const LogoIcon = styled.span`
  color: #23b400;
  margin-left: 0.6rem;
  font-size: 1.6rem;
  @media (min-width: 860px) {
    font-size: 2rem;
  }
`;

export const Path = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.05rem;
  text-transform: capitalize;
  @media (min-width: 860px) {
    font-size: 1.25rem;
  }
`;
