import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem 2rem;
  background-color: #DDE6ED;
`

export const Nav = styled.nav`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  p {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
`

export const Logo = styled.img`
  margin-right: 1rem;
`

export const Image = styled.img`
  width: ${({ bg }) => bg || "100%"};
  height: ${({ hg }) => hg || "100%"};
`