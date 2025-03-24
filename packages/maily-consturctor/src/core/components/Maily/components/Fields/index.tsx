import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import { useMailyContext } from "../../context";
import styles from "./styles.module.css";
import { EditableCell } from "../EditableCell";

const generateClassName = createClassNameFactory("fields", styles);

export const Fields = () => {
  const {
    state: {
      data: { selectedComponent },
    },
  } = useMailyContext();

  return (
    <div className={generateClassName("wrapper")}>
      {Object.entries(selectedComponent?.fields || {}).map(([label, field]) => (
        <EditableCell label={label} field={field} />
      ))}
    </div>
  );
};

