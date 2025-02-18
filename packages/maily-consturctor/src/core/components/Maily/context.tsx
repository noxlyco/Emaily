/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext } from "react";
import { AppState } from "../../types";

interface IMailyContext {
  config: AppState
}

const MailyContext = createContext<IMailyContext | null>(null);

interface MailyProps {
  config: AppState
  children: ReactNode;
}

export const MailyProvider = ({ children, config }: MailyProps) => {
  return (
    <MailyContext.Provider value={{ config }}>
      {children}
    </MailyContext.Provider>
  );
};

export const useMailyContext = () => {
  const mailyContext = useContext<IMailyContext>(MailyContext as any);

  return {
    ...mailyContext
  }
}