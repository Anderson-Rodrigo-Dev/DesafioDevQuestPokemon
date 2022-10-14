import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: 10px auto;

  @media(max-width: 1300px){
    margin: 0 auto;
    width: 300px
  }

  @media (max-width: 1000px){
  align-items: center;
}

  @media(max-width: 425px){
    width:80%;
  }
`;

export const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

@media (max-width: 1300px){
  flex-direction: column;
  align-items: flex-start;
  margin: 10px auto;
}

@media(max-width: 425px){
  align-items: center;
  justify-content: center;
}
`;

export const BarraStatus = styled.div`
  width: 300px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 8px;

  @media(max-width: 500px){
    width:200px;
  }

  @media(max-width: 420px){
    display: none;
  }
`;
export const BarraHP = styled.div`
  width: ${(props) => Math.ceil((props.HP / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;
export const BarraATK = styled.div`
  width: ${(props) => Math.ceil((props.ATK / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;
export const BarraDef = styled.div`
  width: ${(props) => Math.ceil((props.Def / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;
export const BarraSatk = styled.div`
  width: ${(props) => Math.ceil((props.Satk / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;
export const BarraSdef = styled.div`
  width: ${(props) => Math.ceil((props.Sdef / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;
export const BarraSpeed = styled.div`
  width: ${(props) => Math.ceil((props.Speed / 255) * 100)}%;
  height: 100%;
  background: red;
  border-radius: 8px;
`;

export const ContainerPokemon = styled.div`
  background: linear-gradient(to bottom, #1d0d50 0%, #5c33a7 100%);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 40px auto;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 60px 0;
  max-width: 600px;

  @media (max-width: 1000px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 40%;
  margin: 0 20px;

  @media (max-width: 1000px){
    width: 80%;
    margin: 0 auto
  }
`;

export const Title2 = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  margin: 30px;

  @media (max-width: 1000px){
    font-size: 4rem
  }
`;

export const Title3 = styled.h3`
  color: #fff;
  border-radius: 30px;
  padding: 10px;
  background: #f2a3;
  font-weight: bold;
  font-size: 2rem;
  margin: 15px 0;
`;

export const Title4 = styled.h3`
  color: #fff;
  margin: 5px 0;
  font-weight: bold;
  font-size: 2rem;
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
  font-size: 1.6rem;
  margin: 0 5px;
  margin-left: 30px;
  padding: 2px 20px;

  @media (max-width: 1000px){
    margin: 0 10px;
  }
`;

export const ContainerImageAndDetails = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 1300px){
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const DetailsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const MovesDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const Text = styled.li`
  width: 120px;
  color: white;
  font-size: 1.6rem;
`;
