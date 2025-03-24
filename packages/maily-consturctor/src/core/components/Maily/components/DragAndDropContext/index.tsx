import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useState,
} from "react";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useMailyContext } from "../../context";

interface DragAndDropState {
  activeId: string | null;
  droppedComponents: string[];
}

type DragAndDropAction =
  | { type: "SET_ACTIVE_ID"; payload: string | null }
  | { type: "ADD_DROPPED_COMPONENT"; payload: string };

const dragAndDropReducer = (
  state: DragAndDropState,
  action: DragAndDropAction
): DragAndDropState => {
  switch (action.type) {
    case "SET_ACTIVE_ID":
      return { ...state, activeId: action.payload };
    case "ADD_DROPPED_COMPONENT":
      return {
        ...state,
        droppedComponents: [...state.droppedComponents, action.payload],
      };
    default:
      return state;
  }
};

interface DragAndDropContextValue {
  activeId: string | null;
  droppedComponents: string[];
  isDragging: boolean;
  dispatch: React.Dispatch<DragAndDropAction>;
}

const DragAndDropContext = createContext<DragAndDropContextValue | null>(null);

export const DragAndDropProvider = ({ children }: { children: ReactNode }) => {
  const [isDragging, setIsDragging] = useState(false);

  const [state, dispatch] = useReducer(dragAndDropReducer, {
    activeId: null,
    droppedComponents: [],
  });

  const { dispatch: mailyDispatch } = useMailyContext();

  const onDragStart = (e: DragStartEvent) => {
    dispatch({ type: "SET_ACTIVE_ID", payload: e.active.id as string });
    setIsDragging(true);
  };

  const onDragEnd = (e: DragEndEvent) => {
    if (e.over) {
      const targetId = e.over.id as string;

      if (targetId.startsWith("droppable-")) {
        const index = parseInt(targetId.split("-")[1], 10);
        mailyDispatch({
          type: "ADD_COMPONENT",
          payload: { id: e.active.id as string, index },
        });
      }
    }

    dispatch({ type: "SET_ACTIVE_ID", payload: null });
    setIsDragging(false);
  };

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <DragAndDropContext.Provider value={{ ...state, isDragging, dispatch }}>
        {children}
      </DragAndDropContext.Provider>
    </DndContext>
  );
};

export const useDragAndDrop = () => {
  const context = useContext(DragAndDropContext);
  if (!context) {
    throw new Error("useDragAndDrop must be used within a DragAndDropProvider");
  }
  return context;
};

