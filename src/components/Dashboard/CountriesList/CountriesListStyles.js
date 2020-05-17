import { Link } from "react-router-dom";
import styled from "styled-components";

export const Filter = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 340px;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const FilterInput = styled.input`
  width: 90%;
  padding: 4px 8px;
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  border: none;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background-color: #e1e1e1;
  @media (min-width: 420px) {
    padding: 8px;
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  overflow-y: scroll;
  flex-wrap: wrap;
  height: 85%;
  display: flex;
  justify-content: space-between;
  height: 500px;
  padding: 0 0.8rem 0 0;
  &::-webkit-scrollbar {
    width: 0.8rem;
    @media (min-width: 980px) {
      width: 1rem;
    }
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #23b400;
    border-radius: 15px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  min-height: 80px;
  margin-bottom: 0.7rem;
  @media (min-width: 420px) {
    width: 48%;
    min-height: 60px;
    padding: 0 8px;
  }
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 0.95rem;
  padding: 8px;
  background-color: #272727;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  @media (min-width: 860px) {
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
  }
  @media (min-width: 980px) {
    font-size: 1rem;
  }
`;

export const FlagImg = styled.img`
  margin-bottom: 0.5rem;
  @media (min-width: 860px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;
