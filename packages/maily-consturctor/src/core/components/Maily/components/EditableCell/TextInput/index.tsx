import { createClassNameFactory } from "../../../../../../utils/createClassNameFactory";

import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("text-input", styles);

export const TextInput = ({ label = "" }: { label?: string }) => {
  return (
    <>
      {label && <label className={generateClassName("label")}>{label}</label>}
      <div className={generateClassName()}>
        <input type="text" />
      </div>
    </>
  );
};

