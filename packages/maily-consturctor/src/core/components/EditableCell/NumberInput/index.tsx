import { useState } from "react";
import { NumberField } from "../../../types/Fields";

type NumberInputProps = NumberField & {
  onChange: (value: number) => void;
};

export const NumberInput = ({
  min,
  max,
  defaultValue = 0,
  onChange,
}: NumberInputProps) => {
  const [value, setValue] = useState(defaultValue || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue(value);
    onChange(value);
  };

  return (
    <input
      type="number"
      value={Number(value)}
      min={min}
      max={max}
      onChange={handleChange}
    />
  );
};

