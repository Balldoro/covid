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
