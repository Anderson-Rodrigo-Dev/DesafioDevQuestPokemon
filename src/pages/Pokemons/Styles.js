import styled from "styled-components";

export const UnordeList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

`;

export const List = styled.li`
  background: linear-gradient(to bottom, #1d0d50 0%, #5c33a7 100%);
  border-radius: 40px;
  color: #000;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  height: 270px;
  justify-content: space-around;
  margin: 20px;
  padding: 10px;
  width: 220px;
`;

export const SubTitle = styled.h2`
  color: #fff;
  margin: 20px 0;
  font-size: 2.6rem;
`;

export const Image = styled.img`
  filter: drop-shadow(10px 10px 10px #000);
  margin: 15px auto;
  transition: 0.2s ease-in-out;
  width: 130px;

  &:hover {
    scale: 1.3;
  }
`;

export const Rotate = styled.div`
  animation: rotate 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #5321b1;
  height: 50px;
  margin: 0 auto;
  width: 50px;

  @keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
`

export const Types = styled.span`
  background-color: ${(props) =>
    props.children === "grass"
      ? "#26ca4f"
      : props.children === "bug"
      ? "#3c984f"
      : props.children === "dark"
      ? "#585977"
      : props.children === "dragon"
      ? "#60cad9"
      : props.children === "electric"
      ? "#f9f973"
      : props.children === "fairy"
      ? "#d21f67"
      : props.children === "fighting"
      ? "#ef6237"
      : props.children === "fire"
      ? "#fb4a5a"
      : props.children === "flying"
      ? "#95b1c6"
      : props.children === "ghost"
      ? "#906791"
      : props.children === "ground"
      ? "#6d4a1b"
      : props.children === "ice"
      ? "#d9f3fb"
      : props.children === "normal"
      ? "#c898a6"
      : props.children === "poison"
      ? "#9a69d7"
      : props.children === "psychic"
      ? "#f0208f"
      : props.children === "rock"
      ? "#8a3d21"
      : props.children === "steel"
      ? "#3ebf91"
      : "#84a9fa"};

  border-radius: 5px;
  color: #000;
  margin: 0 5px;
  padding: 2px 20px;
  font-size: 1.6rem;
`;