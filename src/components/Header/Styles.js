import styled from "styled-components";

export const Header = styled.div`
  background: linear-gradient(
    180deg,
    rgba(117, 180, 255, 0.8) 0%,
    rgba(117, 180, 255, 0) 100%
  );
  ${
    "" /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  }
`;

export const Logo = styled.img`
  margin: 30px;
  max-width: 300px;
`;

export const ThemeButton = styled.div`
  align-self: flex-start;
  margin: 20px;
`;
