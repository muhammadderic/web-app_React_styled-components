import styled from "styled-components";

export const Image = styled.img`
  width: ${({ bg }) => bg || "100%"};
  height: ${({ hg }) => hg || "100%"};
`