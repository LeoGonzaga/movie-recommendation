import React from "react";
import { Container } from "./styles";
import useChip from "./useChip";

type ChipProps = {
  id: number;
  name: string;
  selectedItems: any;
  addItem: (item: any) => void;
};

const Chip: React.FC<ChipProps> = ({ id, name, selectedItems, addItem }) => {
  const { checked, handleCheck } = useChip();

  const handleAddOrRemoveItem = () => {
    const items = [...selectedItems];
    const index = items.indexOf(id);
    index > -1 ? items.splice(index, 1) : items.push(id);
    addItem(items);
    handleCheck();
  };

  return (
    <Container checked={checked} onClick={handleAddOrRemoveItem}>
      {name}
    </Container>
  );
};

export default Chip;
