import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  @media (min-width: 600px) {
    position: static;
    min-width: 120px;
    width: auto;
    min-height: 100vh;
    height: auto;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  width: 50%;
  border: 1px solid #ebebeb;
  @media (min-width: 600px) {
    width: 100%;
    height: 70px;
    border: none;
    border-bottom: 1px solid #ebebeb;
  }
`;

export const LinkIcon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
  font-size: 1.35rem;
  margin-bottom: 0.1rem;
`;

export const LinkWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Roboto, sans-serif;
  height: 100%;
  text-decoration: none;
  color: #222;
  &.active {
    ${LinkIcon} {
      color: #23b400;
    }
  }
`;
