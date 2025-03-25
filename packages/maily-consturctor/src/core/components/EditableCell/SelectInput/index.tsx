import { useState } from "react";
import { SelectField } from "../../../types/Fields";

type SelectInputProps = SelectField & {
  onChange: (value: string) => void;
};

export const SelectInput = ({
  options = [],
  defaultValue = "",
  onChange,
}: SelectInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };

  return (
    <select value={String(value)} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={String(value)} value={String(value)}>
          {label}
        </option>
      ))}
    </select>
  );
};

