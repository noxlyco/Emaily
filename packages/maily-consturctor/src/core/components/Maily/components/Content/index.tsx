import { Fragment } from "react/jsx-runtime";
import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import { ComponentType } from "../../../../types/Component";
import { useMailyContext } from "../../context";
import { ActionMenu } from "../ActionMenu";
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

  const output = Object.fromEntries(
    Object.entries(component.fields ?? {}).map(([key, value]) => [
      key,
      value || value?.defaultValue,
    ])
  );

  console.log(selectedComponent);
  return (
    <Fragment>
      <span
        className={generateClassName("wrapper", { isSelected })}
        onClick={handleSelectContent}
      >
        {isSelected && (
          <ActionMenu
            label={selectedComponent.label}
            id={selectedComponent.id}
          />
        )}
        <div
          className={generateClassName("item")}
          dangerouslySetInnerHTML={{
            __html: component.render(output) || "",
          }}
        />
      </span>
    </Fragment>
  );
};

