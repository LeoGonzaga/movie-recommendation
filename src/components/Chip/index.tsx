import React from "react";
import { Container } from "./styles";
import useChip from "./useChip";

type ChipProps = {
  name: string;
};

const Chip: React.FC<ChipProps> = ({ name }) => {
  const { checked, handleCheck } = useChip();
  return (
    <Container checked={checked} onClick={handleCheck}>
      {name}
    </Container>
  );
};

export default Chip;
