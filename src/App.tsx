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
import { Button } from "react-bootstrap";
function App() {
  // create an instance of the engine with all the defaults
  const app = new Application();
  let nodesObject: any;
  let linksObject: any;
  const serialize = () => {
    let activeModel = app.getActiveDiagram().serialize();
    let { layers } = activeModel;
    let links = layers.find((layer) => {
      return layer.type === "diagram-links";
    });
    let nodes = layers.find((layer) => {
      return layer.type === "diagram-nodes";
    });

    console.log("LINKS====>", links);
    console.log("NODES=====>", nodes);
    nodesObject = nodes;
    linksObject = links;
    // props.startTransformation(false);
  };
  return (
    <>
      <BodyWidget app={app} />
      <Button onClick={serialize}>serialize</Button>
    </>
  );
}
export default App;
