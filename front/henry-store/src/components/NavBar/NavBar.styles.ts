import styled from "styled-components";





export const MobileButton = styled.button`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;
