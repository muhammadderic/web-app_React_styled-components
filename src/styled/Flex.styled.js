import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  & > ul {
    flex: 1;
  }

  .text {
    width: 40%;
  }
`