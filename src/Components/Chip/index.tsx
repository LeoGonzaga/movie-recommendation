import React from "react";
import { Container } from "./styles";

type ChipProps = {
  name: string;
};

const Chip: React.FC<ChipProps> = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Chip;
