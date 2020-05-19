import {
  NodeModel,
  NodeModelGenerics,
  PortModelAlignment,
  PortModel,
} from "@projectstorm/react-diagrams";
import { ConcatPortModel } from "./ConcatPortModel";
import { store } from "./store";
import { setReplaceOperatorProperties } from "./store/appActions";
// import { AppStore } from "./store";
export class ConcatNodeModel extends NodeModel<NodeModelGenerics> {
  operatorProperties: {
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

    console.log(
      "111111111111111111111111",
      this.getPort(PortModelAlignment.TOP)
    );
    store.subscribe(this.listener);
    this.replaceProperty = {};
    this.operatorProperties = {
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
  };

  demofunction = (operatorProperties: any) => {
    let state = store.dispatch(
      setReplaceOperatorProperties(operatorProperties)
    );
    console.log("propsssss", operatorProperties);
  };
}
