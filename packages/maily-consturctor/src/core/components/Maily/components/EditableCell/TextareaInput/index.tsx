import { useState } from "react";
import { TextareaField } from "../../../../../types/Fields";

type TextareaInputProps = TextareaField & {
  onChange: (value: string) => void;
};

export const TextareaInput = ({
  defaultValue = "",
  onChange,
}: TextareaInputProps) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };

  return <textarea value={String(value)} onChange={handleChange} />;
};

