import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import { IconTrash } from "@tabler/icons-react";

import styles from "./styles.module.css";
import { useMailyContext } from "../../context";

const generateClassName = createClassNameFactory("action-menu", styles);

export const ActionMenu = ({
  label = "",
  id = "",
}: {
  label: string;
  id: string;
}) => {
  const { dispatch } = useMailyContext();

  const handleDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    dispatch({ type: "REMOVE_COMPONENT", payload: id });
    dispatch({ type: "SET_SELECTED_COMPONENT", payload: null });
  };

  return (
    <div className={generateClassName("wrapper")}>
      <label>{label}</label>
      <IconTrash
        className={generateClassName("trash")}
        onClick={handleDelete}
      />
    </div>
  );
};

