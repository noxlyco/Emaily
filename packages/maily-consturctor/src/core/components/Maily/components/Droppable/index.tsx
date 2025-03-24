import { useDroppable } from "@dnd-kit/core";
import { memo, ReactNode } from "react";
import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("droppable", styles);

export const Droppable = memo(
  ({
    id,
    children,
    isEmpty = false,
  }: {
    id: string;
    children?: ReactNode;
    isEmpty?: boolean;
  }) => {
    const { isOver, setNodeRef } = useDroppable({ id });

    return (
      <div
        ref={setNodeRef}
        className={generateClassName("wrapper", { isOver, isEmpty })}
      >
        {children}
      </div>
    );
  }
);

