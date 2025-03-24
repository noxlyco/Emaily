import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import { ComponentType } from "../../../../types/Component";
import { useMailyContext } from "../../context";
import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("content", styles);

export const Content = ({
  component,
  id = "",
}: {
  id: string;
  component: ComponentType;
}) => {
  const {
    dispatch,
    state: {
      data: { selectedComponent },
    },
  } = useMailyContext();

  const isSelected = selectedComponent?.id === id;

  const handleSelectContent = () => {
    dispatch({ type: "SET_SELECTED_COMPONENT", payload: { id, ...component } });
  };

  return (
    <span
      className={generateClassName("wrapper", { isSelected })}
      onClick={handleSelectContent}
    >
      <div
        className={generateClassName("item")}
        dangerouslySetInnerHTML={{
          __html: component.render({ text: "text" }) || "",
        }}
      />
    </span>
  );
};

