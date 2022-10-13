import styled from "styled-components";

export const ContainerPokemon = styled.div`
  background: linear-gradient(to bottom, #1d0d50 0%, #5c33a7 100%);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 40px auto;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 60px 0;
`;

export const Image = styled.img`
  max-width: 360px;
`;

export const Title2 = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
`;

export const Title3 = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  margin: 15px 0;
`;

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
  margin-left: 30px;
  padding: 2px 20px;
`;

export const ContainerImageAndDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const DetailsContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 0;
`;

export const MovesDetails = styled.ul`
  display: flex;
  ${"" /* flex-direction: column; */}
  flex-wrap: wrap;
  overflow-y: scroll;
  text-align: start;
  height: 80px;
  width: 100%;
  justify-content: space-between;
`;

export const Text = styled.li`
  width: 100px;
  color: white;
  font-size: 1.6rem;
`;
