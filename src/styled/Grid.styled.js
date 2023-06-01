import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ cells }) => cells};
  align-items: center;

  p {
    line-height: 2rem;
  }
`