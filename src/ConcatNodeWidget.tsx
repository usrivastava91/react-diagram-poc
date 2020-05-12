import React, { createRef, useRef } from "react";
import { ConcatNodeModel } from "./ConcatNodeModel";
import {
  DiagramEngine,
  PortModelAlignment,
  PortWidget,
} from "@projectstorm/react-diagrams";
import { AppStore } from "./store";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { setReplaceProperty } from "./store/appActions";
// import { AppStore} from "./store"
export interface ConcatNodeWidgetProps {
  node: ConcatNodeModel;
  engine: DiagramEngine;
  size: number;
  setReplaceProperty: typeof setReplaceProperty;
}

// namespace S {
export const Port = styled.div`
  width: 16px;
  height: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;
// }

interface State {
  replaceProperty: string;
}

export class _ConcatNodeWidget extends React.Component<
  ConcatNodeWidgetProps,
  State
> {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: ConcatNodeWidgetProps) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      replaceProperty: "",
    };
  }

  passValues = () => {
    const { setReplaceProperty } = this.props;
    const value = this.inputRef.current?.value!;
    setReplaceProperty(value);
  };
  render() {
    return (
      <div
        className={"If-node"}
        style={{
          position: "relative",
          width: this.props.size,
          height: this.props.size,
        }}
      >
        <input ref={this.inputRef} id="input"></input>
        <button onClick={this.passValues}>submit</button>
        <svg
          width={this.props.size}
          height={this.props.size}
          dangerouslySetInnerHTML={{
            __html:
              `
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
            <polygon fill="mediumpurple" stroke="${
              this.props.node.isSelected() ? "white" : "#000000"
            }" stroke-width="3" stroke-miterlimit="10" points="10,` +
              this.props.size / 2 +
              ` ` +
              this.props.size / 2 +
              `,10 ` +
              (this.props.size - 10) +
              `,` +
              this.props.size / 2 +
              ` ` +
              this.props.size / 2 +
              `,` +
              (this.props.size - 10) +
              ` " />
              <text x="38" y="45" text-anchor="middle" fill="white" font-size="15">Concat</text>
          </g>
        `,
          }}
        />
        {/* <PortWidget
          style={{
            top: this.props.size / 2 - 8,
            left: -8,
            position: "absolute",
          }}
          port={this.props.node.getPort(PortModelAlignment.LEFT)!}
          engine={this.props.engine}
        >
          <Port />
        </PortWidget> */}

        <PortWidget
          style={{
            left: this.props.size / 2 - 8,
            top: -8,
            position: "absolute",
          }}
          port={this.props.node.getPort(PortModelAlignment.TOP)!}
          engine={this.props.engine}
        >
          <Port>first</Port>
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.size - 8,
            top: this.props.size / 2 - 8,
            position: "absolute",
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)!}
          engine={this.props.engine}
        >
          <Port />
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.size / 2 - 8,
            top: this.props.size - 8,
            position: "absolute",
          }}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)!}
          engine={this.props.engine}
        >
          <Port>second</Port>
        </PortWidget>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => {
  const { replaceProperty } = state;

  return {
    replaceProperty,
  };
};

export const ConcatNodeWidget = connect(mapStateToProps, {
  setReplaceProperty,
})(_ConcatNodeWidget);
