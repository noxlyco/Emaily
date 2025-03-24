import { Fragment } from "react/jsx-runtime";
import { createClassNameFactory } from "../../../../../utils/createClassNameFactory";
import { useMailyContext } from "../../context";
import { Content } from "../Content";
import { Droppable } from "../Droppable";
import styles from "./styles.module.css";

const generateClassName = createClassNameFactory("preview", styles);

export const Preview = () => {
  const {
    state: {
      data: {
        structure: { json = {} },
      },
    },
  } = useMailyContext();

  const isEmpty = !Object.keys(json).length;

  if (isEmpty)
    return (
      <div className={generateClassName({ isEmpty })}>
        <Droppable id="droppable-empty" isEmpty />
      </div>
    );

  const entries = Object.entries(json);

  return (
    <>
      {entries.map(([id, value], index) => (
        <Fragment key={id}>
          <Droppable id={`droppable-${index}`} />

          <Content id={id} component={value} />
        </Fragment>
      ))}

      <Droppable id={`droppable-${entries.length}`} />
    </>
  );
};

