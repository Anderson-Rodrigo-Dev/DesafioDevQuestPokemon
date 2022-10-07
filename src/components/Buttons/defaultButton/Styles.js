import styled from "styled-components";

export const Button = styled.button`

  border-radius: 20px;
  border: none;
  background-color: rgba(117,180,255,0.9);
  color: #fff;
  margin: 40px;
  padding: 10px;

&:hover {
  cursor: pointer;
}

&:disabled {
  opacity: 0.5;
  cursor: default;
}

`