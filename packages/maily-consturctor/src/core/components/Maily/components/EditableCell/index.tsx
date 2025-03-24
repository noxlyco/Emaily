import { FieldType } from "../../../../types/Fields";
import { NumberInput } from "./NumberInput";
import { RadioInput } from "./RadioInput";
import { SelectInput } from "./SelectInput";
import { TextareaInput } from "./TextareaInput";
import { TextInput } from "./TextInput";

export const EditableCell = ({
  label,
  field,
}: {
  label?: string;
  field: FieldType;
}) => {
  const { type } = field;

  switch (type) {
    case "text": {
      return <TextInput label={label} />;
    }
    case "number": {
      return <NumberInput />;
    }
    case "radio": {
      return <RadioInput />;
    }
    case "select": {
      return <SelectInput />;
    }
    case "textarea": {
      return <TextareaInput />;
    }
    default: {
      return null;
    }
  }
};

