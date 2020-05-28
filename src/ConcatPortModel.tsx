import {
  LinkModel,
  PortModel,
  DefaultLinkModel,
  PortModelAlignment,
} from "@projectstorm/react-diagrams";
import { store } from "./store";
import { SetUpdatedLInk } from "./store/appActions";

export class ConcatPortModel extends PortModel {
  protected activeLinkModel: LinkModel;
  // protected linkEngine: LinkEngi
  constructor(alignment: PortModelAlignment) {
    super({
      type: "concat",
      name: alignment,
      alignment: alignment,
    });
    this.activeLinkModel = new DefaultLinkModel();
    this.newLinkModel();
  }

  newLinkModel = () => {
    this.activeLinkModel.registerListener({
      targetPortChanged: (port: any) => {
        console.log("TARGET PORT");
        // let state = store.dispatch(SetUpdatedLInk(port));
      },
      sourcePortChanged: (port: any) => {
        console.log("SOURCE PORT");
        // let state = store.dispatch(SetUpdatedLInk(port));
      },
    });
  };
  // createLinkModel(): LinkModel {
  //   return new DefaultLinkModel();
  // }
}
