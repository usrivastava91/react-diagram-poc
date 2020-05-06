import React from "react";
import logo from "./logo.svg";
import "./App.css";
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { Application } from "./Application";
import { BodyWidget } from "./BodyWidget";
function App() {
  // create an instance of the engine with all the defaults
  const app = new Application();

  return <BodyWidget app={app} />;
}
export default App;
