import { ReactNode } from "react";
import { AppState } from "../../types";
import { MailyProvider } from "./context";
import { createClassNameFactory } from "../../../utils/createClassNameFactory";
import { Components, Fields, Hierarchy, Preview } from "./components";
import { DragAndDropProvider } from "./components/DragAndDropContext";
import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("maily", styles);

export const Maily = ({
  children,
  config,
}: {
  children?: ReactNode;
  config: AppState;
}) => {
  return (
    <MailyProvider config={config}>
      <DragAndDropProvider>
        {children || (
          <div className={generateClassName("wrapper")}>
            <div className={generateClassName("header")}>
              <h3 className={generateClassName("title")}>Emaily</h3>
            </div>
            <div className={generateClassName("contentPart")}>
              <div className={generateClassName("leftSidebar")}>
                <Components />
                <Hierarchy />
              </div>
              <div className={generateClassName("root")}>
                <Preview />
              </div>
              <div className={generateClassName("rightSidebar")}>
                <Fields />
              </div>
            </div>
            <div className={generateClassName("footer")}>Footer</div>
          </div>
        )}
      </DragAndDropProvider>
    </MailyProvider>
  );
};

Maily.Fields = Fields;
Maily.Preview = Preview;
Maily.Hierarchy = Hierarchy;
Maily.Components = Components;
