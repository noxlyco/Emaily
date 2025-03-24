import { useDraggable } from "@dnd-kit/core";
import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import styles from "./styles.module.css";
import {
  generateRandomId,
  parseRandomId,
} from "../../../../../utils/generateRandomId";

const generateClassName = createClassNameFactory("draggable", styles);

export const Draggable = ({
  name,
  isDragged = false,
}: {
  name: string;
  isDragged?: boolean;
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: generateRandomId(name),
  });

  return (
    <div ref={setNodeRef} className={generateClassName("wrapper")}>
      <button
        {...attributes}
        {...listeners}
        className={generateClassName("item", { isDragged })}
      >
        {isDragged ? parseRandomId(name) : name}
      </button>
    </div>
  );
};
