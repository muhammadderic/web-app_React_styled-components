import styled from "styled-components";

export const Button = styled.button`
  max-width: 100%;
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: .25px;
  background-color: #fff;
  color: #222;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  cursor: pointer;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;

  &:hover {
    background: #27374D;
    color: #DDE6ED;
  }

  &:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }
`