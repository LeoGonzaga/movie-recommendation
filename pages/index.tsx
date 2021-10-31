import type { NextPage } from "next";
import Chip from "../src/Components/Chip";
import { FlexContent, Row } from "../styles/UI";

const Home: NextPage = () => {
  const array = [1, 1, 1, 1, 1, 1];
  return (
    <FlexContent direction="column" align="center">
      <h1>Selecionar generos</h1>
      <FlexContent justify="center">
        {array.map((element, index) => (
          <Chip name="teste" key={index} />
        ))}
      </FlexContent>
    </FlexContent>
  );
};

export default Home;
