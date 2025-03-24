/* eslint-disable react-refresh/only-export-components */
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { AppState } from "../../types";
import { parseRandomId } from "../../../utils/generateRandomId";
import { ComponentType } from "../../types/Component";

type MailyAction =
  | {
      type: "ADD_COMPONENT";
      payload: {
        id: string;
        index: number;
      };
    }
  | {
      type: "REMOVE_COMPONENT";
      payload?: string;
    }
  | {
      type: "SET_SELECTED_COMPONENT";
      payload: ComponentType & { id: string };
    };

const mailyReducer = (state: AppState, action: MailyAction): AppState => {
  const {
    data: { components },
  } = state;

  switch (action.type) {
    case "SET_SELECTED_COMPONENT": {
      return {
        ...state,
        data: {
          ...state.data,
          selectedComponent: action.payload,
        },
      };
    }
    case "ADD_COMPONENT": {
      const { id, index } = action.payload;
      const name = parseRandomId(id);
      const component = components[name];

      const newJsonEntries = Object.entries(state.data.structure?.json || {});
      newJsonEntries.splice(index, 0, [id, component]);

      return {
        ...state,
        data: {
          ...state.data,
          structure: {
            ...state.data.structure,
            json: Object.fromEntries(newJsonEntries),
          },
        },
      };
    }
    case "REMOVE_COMPONENT":
      return state;
    default:
      return state;
  }
};

interface MailyContextValue {
  state: AppState;
  dispatch: React.Dispatch<MailyAction>;
}

const MailyContext = createContext<MailyContextValue | null>(null);

interface MailyProps {
  config: AppState;
  children: ReactNode;
}

export const MailyProvider = ({ children, config }: MailyProps) => {
  const [state, dispatch] = useReducer(mailyReducer, config);

  return (
    <MailyContext.Provider value={{ state, dispatch }}>
      {children}
    </MailyContext.Provider>
  );
};

export const useMailyContext = () => {
  const context = useContext(MailyContext);

  if (!context) {
    throw new Error("useMailyContext must be used within a MailyProvider");
  }

  return { ...context };
};

