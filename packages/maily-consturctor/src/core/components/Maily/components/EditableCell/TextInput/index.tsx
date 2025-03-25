import { useState } from "react";
import { TextField } from "../../../../../types/Fields";

type TextInputProps = TextField & {
  onChange: (value: string) => void;
};

export const TextInput = ({ defaultValue = "", onChange }: TextInputProps) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };

  return <input type="text" value={String(value)} onChange={handleChange} />;
};

