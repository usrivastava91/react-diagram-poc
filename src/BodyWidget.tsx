import React from "react";
import * as _ from "lodash";
import { DefaultNodeModel } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import styled from "@emotion/styled";

import { TrayWidget } from "./TrayWidget";
import { Application } from "./Application";
import { TrayItemWidget } from "./TrayItemWidget";

import "./FlowCanvas.scss";
import { ConcatNodeModel } from "./ConcatNodeModel";

export interface BodyWidgetProps {
  app: Application;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
// namespace S {
const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 90vh;
`;

const Layer = styled.div`
  position: relative;
  flex-grow: 1;
`;

export class BodyWidget extends React.Component<BodyWidgetProps> {
  render() {
    return (
      <Body className="flowContainer">
        <Content>
          <TrayWidget>
            <TrayItemWidget
              model={{ type: "both", name: "Replace" }}
              name="Replace"
              color="#4DB6AC"
            />
            <TrayItemWidget
              model={{ type: "concat", name: "Concat" }}
              name="Concat"
              color="#4DB6AC"
            />
            <TrayItemWidget
              model={{ type: "both", name: "Split" }}
              name="Split"
              color="#4DB6AC"
            />
            <TrayItemWidget
              model={{ type: "both", name: "Date Format" }}
              name="Date Format"
              color="#4DB6AC"
            />
          </TrayWidget>
          <Layer
            onDrop={(event) => {
              let data = JSON.parse(
                event.dataTransfer.getData("storm-diagram-node")
              );
              console.log("datatatatatata", data);

              //   let nodesCount = _.keys(
              //     this.props.app
              //       .getDiagramEngine()
              //       .getModel()
              //       .getNodes()
              //   ).length;

              let node: any = null;

              switch (data.type) {
                case "in":
                  node = new DefaultNodeModel(data.name, "#4DB6AC");
                  node.addInPort("In");
                  break;

                case "out":
                  node = new DefaultNodeModel(data.name, "#4DB6AC");
                  node.addOutPort("Out");
                  break;

                case "both":
                  node = new DefaultNodeModel(data.name, "#4DB6AC");
                  node.addInPort("In");
                  node.addOutPort("Out");
                  break;

                case "concat":
                  node = new ConcatNodeModel();
                  break;
                default:
                  break;
              }

              let point = this.props.app
                .getDiagramEngine()
                .getRelativeMousePoint(event);
              node.setPosition(point);

              this.props.app.getDiagramEngine().getModel().addNode(node);
              this.forceUpdate();
            }}
            onDragOver={(event) => {
              event.preventDefault();
            }}
          >
            <div className="canvasContainer">
              <CanvasWidget engine={this.props.app.getDiagramEngine()} />
            </div>
          </Layer>
        </Content>
      </Body>
    );
  }
}
