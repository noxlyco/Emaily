import { createRoot } from "react-dom/client";
import { Maily } from "./core/components/Maily";

import "./main.css";

const components = {
  hero: {
    render: ({ text = "", textarea = "", number = 1, select }) =>
      `<p>Component ${text}</p><br /><p> ${textarea}</p><br /><p> ${number}</p><br /><p> ${select}</p>`,
    fields: {
      textarea: {
        type: "textarea",
        defaultValue: "Textarea",
      },
      text: {
        type: "text",
      },
      number: {
        type: "number",
        defaultValue: 5,
      },
      select: {
        type: "select",
        defaultValue: "Option 1",
        options: [
          { label: "Option 1", value: "Option 1" },
          { label: "Option 2", value: "Option 2" },
        ],
      },
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <Maily config={{ data: { components, structure: {} }, ui: {} }} />
);

