import {
  NodeModel,
  NodeModelGenerics,
  PortModelAlignment,
  PortModel,
} from "@projectstorm/react-diagrams";
import { ConcatPortModel } from "./ConcatPortModel";
import { store } from "./store";
// import { AppStore } from "./store";
export class ConcatNodeModel extends NodeModel<NodeModelGenerics> {
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
  }

  listener = () => {
    let state = store.getState();
    alert(state.replaceProperty);
  };
}
