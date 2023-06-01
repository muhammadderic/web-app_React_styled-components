import styled from "styled-components";

export const StyledCard = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 1rem auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  gap: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .content {
    flex: 1;
  }

  img {
    border-radius: .5rem;
  }
`