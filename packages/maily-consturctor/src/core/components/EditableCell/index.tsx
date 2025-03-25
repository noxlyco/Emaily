import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput";
import { TextareaInput } from "./TextareaInput";
import { TextInput } from "./TextInput";
import { Fragment } from "react/jsx-runtime";
import { useMailyContext } from "../Maily/context";
import { FieldType } from "../../types/Fields";
import { createClassNameFactory } from "../../../utils/createClassNameFactory";

import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("editable-cell", styles);

export const EditableCell = ({
  label,
  field,
}: {
  label?: string;
  field: FieldType;
}) => {
  const { type } = field;

  const {
    dispatch,
    state: { data: json },
  } = useMailyContext();

  const onChange = (value: string | number) => {
    dispatch({
      type: "UPDATE_COMPONENT",
      payload: {
        id: json.selectedComponent.id,
        fieldKey: label!,
        value,
      },
    });
  };

  const renderInput = () => {
    switch (type) {
      case "text": {
        return <TextInput {...field} onChange={onChange} />;
      }
      case "number": {
        return <NumberInput {...field} onChange={onChange} />;
      }
      case "select": {
        return <SelectInput {...field} onChange={onChange} />;
      }
      case "textarea": {
        return <TextareaInput {...field} onChange={onChange} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Fragment>
      {label && <label className={generateClassName("label")}>{label}</label>}
      <div className={generateClassName("wrapper")}>{renderInput()}</div>
    </Fragment>
  );
};

