import { createRoot } from "react-dom/client";
import { Maily } from "./core/components/Maily";

import "./main.css";

const components = {
  hero: {
    render: ({ text = "" }) => `<p>Component ${text}</p>`,
    fields: {
      text: {
        type: "text",
      },
    },
  },
  hero1: {
    render: () => `<p>Component #2</p>`,
    fields: {
      text: {
        type: "text",
      },
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <Maily config={{ data: { components, structure: {} }, ui: {} }} />
);

