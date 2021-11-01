import React from "react";
import { FlexContent } from "../../../styles/UI";
import {
  Banner,
  Button,
  Description,
  Name,
  Content,
  Container,
} from "./styles";

const Movies: React.FC = () => {
  return (
    <Container>
      <FlexContent direction="column" align="center">
        <Content>
          <Banner
            width="100%"
            src="https://image.tmdb.org/t/p/original/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg"
            alt=""
          />
        </Content>
        <Name>The Amazing Spider-Man</Name>
        <Description>
          When an extortionist threatens to force a multi-suicide unless a huge
          ransom is paid, only Peter Parker can stop him with his new powers as
          Spider-Man.
        </Description>

        <Button>
          <p>Quero outro</p>
        </Button>
      </FlexContent>
    </Container>
  );
};

export default Movies;
