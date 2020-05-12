import { ConcatNodeWidget } from "./ConcatNodeWidget";
import { ConcatNodeModel } from "./ConcatNodeModel";
import * as React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";

export class ConcatNodeFactory extends AbstractReactFactory<
  ConcatNodeModel,
  DiagramEngine
> {
  constructor() {
    super("Concat");
  }

  generateReactWidget(event: any): JSX.Element {
    return (
      <ConcatNodeWidget engine={this.engine} size={75} node={event.model} />
    );
  }

  generateModel(event: any) {
    return new ConcatNodeModel();
  }
}
