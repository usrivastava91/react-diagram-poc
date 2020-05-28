import React from "react";
import logo from "./logo.svg";
import "./App.css";
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";
import { store } from "./store";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { Application } from "./Application";
import { BodyWidget } from "./BodyWidget";
import { Button } from "react-bootstrap";
import { SetUpdatedLInk } from "./store/appActions";

function App() {
  // create an instance of the engine with all the defaults
  const app = new Application();
  let nodesObject: any;
  let linksObject: any;
  const serialize = () => {
    const link = {};

    //DISPATCHING THIS ACTION TO INFORM THE OPERATOR NODES TO CAPTURE ALL THE REQUIRED INFORMATION
    let state = store.dispatch(SetUpdatedLInk(link));
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
