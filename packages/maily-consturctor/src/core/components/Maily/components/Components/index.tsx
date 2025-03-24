import { DragOverlay } from "@dnd-kit/core";
import { useMailyContext } from "../../context";
import { Draggable } from "../Draggable";
import { useDragAndDrop } from "../DragAndDropContext";
import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("components", styles);

export const Components = () => {
  const {
    state: {
      data: { components = {} },
    },
  } = useMailyContext();

  const { activeId } = useDragAndDrop();

  return (
    <>
      <div className={generateClassName("wrapper")}>
        {Object.keys(components).map((name) => (
          <div>
            <Draggable name={name} />
          </div>
        ))}
      </div>

      <DragOverlay>
        {activeId ? <Draggable name={activeId} isDragged /> : null}
      </DragOverlay>
    </>
  );
};

