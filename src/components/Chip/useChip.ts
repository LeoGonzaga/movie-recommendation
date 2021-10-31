import { useState, useCallback } from "react";

const useChip = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return {
    checked,
    handleCheck,
  };
};

export default useChip;
