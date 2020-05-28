import {
  NodeModel,
  NodeModelGenerics,
  PortModelAlignment,
  PortModel,
  DefaultLinkModel,
} from "@projectstorm/react-diagrams";
import { ConcatPortModel } from "./ConcatPortModel";
import { store } from "./store";
import { setReplaceOperatorProperties } from "./store/appActions";
// import { AppStore } from "./store";

interface operatorNodeInfo {
  id: string;
  operatorName: string;
  sourceOperands: [{ id: string; name: string }];
  destinationOperands: [{ id: string; name: string }];
  attributes: [string];
}
export class ConcatNodeModel extends NodeModel<NodeModelGenerics> {
  operatorProperties: {
    id: string;
    name: string;
    ports: {};
    attributes: {
      //this is for the operators like the replace operator, where the user might need to add
      // extra attributes. this is only here for demo purpose.
      replaceProperty: {};
    };
  };
  replaceProperty: {};
  constructor() {
    super({
      type: "Concat",
    });
    // let firstWord: string = "firstWord";
    // let secondWord: string = "secondWord";
    // this.addPort(new PortModel(name));
    // this.addPort(new PortModel(name));
    this.addPort(new ConcatPortModel(PortModelAlignment.TOP));
    this.addPort(new ConcatPortModel(PortModelAlignment.BOTTOM));
    this.addPort(new ConcatPortModel(PortModelAlignment.RIGHT));

    // console.log("111111111111111111111111", this.options.type);
    store.subscribe(this.listener);
    this.replaceProperty = {};
    this.operatorProperties = {
      id: this.getID(),
      name: this.options.type!,
      ports: {
        firstInputPort: this.getPort(PortModelAlignment.TOP),
        secondInputPort: this.getPort(PortModelAlignment.BOTTOM),
        outputPort: this.getPort(PortModelAlignment.RIGHT),
      },
      //this property is not used in the concatNode. This kind of attributes will usually be used
      // for operator nodes where we need the user to provide an input. eg. replace operator.
      //we are implementing it here only for demo purposes
      attributes: {
        replaceProperty: this.replaceProperty,
      },
    };
    this.demofunction(this.operatorProperties);
  }
  listener = () => {
    let state = store.getState();
    // alert(state.replaceProperty);
    this.replaceProperty = state.replaceProperty;
    this.operatorProperties.attributes.replaceProperty = this.replaceProperty;
    this.nodeInfoObject(this.operatorProperties);
  };

  nodeInfoObject = (operatorProps: any) => {
    let nodeInfo: operatorNodeInfo;
    let firstInputPortLink = operatorProps.ports.firstInputPort;
    let secondInputPortLink = operatorProps.ports.secondInputPort.links;
    let outputPortLink = operatorProps.ports.outputPort.links;
    console.log("LISTENEDD", firstInputPortLink);
    console.log(
      "firstPortLink===============>",
      Object.getOwnPropertyNames(firstInputPortLink)[0],
      "secondInputPortLink============>",
      Object.getOwnPropertyNames(secondInputPortLink)[0],
      "thirdInputPortLink ==================>",
      Object.getOwnPropertyNames(outputPortLink)[0]
    );
    let Portlink = Object.getOwnPropertyNames(firstInputPortLink)[0];
    // let firsInputPortLinkInfo = firstInputPortLink.Object.getOwnPropertyNames(
    //   firstInputPortLink
    // )[0];
    let finalVal = Object.values(firstInputPortLink)[0];
    console.log(
      "link=============>",
      firstInputPortLink,
      "link id==============>",
      Portlink,
      "link object ==========>",
      finalVal
    );
    // nodeInfo = {
    //   id: operatorProps.id,
    //   operatorName: operatorProps.name,
    //   sourceOperands: [{}]
    //   // sourceOperands: operatorProps.ports.firstInputPort.length > 0 : []
    // };
  };

  demofunction = (operatorProperties: any) => {
    let state = store.dispatch(
      setReplaceOperatorProperties(operatorProperties)
    );
    // console.log("propsssss", operatorProperties);
  };
}
