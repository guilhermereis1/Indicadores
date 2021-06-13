import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Form />
  </StrictMode>,
  rootElement
);
