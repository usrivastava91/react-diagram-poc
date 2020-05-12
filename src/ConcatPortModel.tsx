import {
  LinkModel,
  PortModel,
  DefaultLinkModel,
  PortModelAlignment,
} from "@projectstorm/react-diagrams";

export class ConcatPortModel extends PortModel {
  constructor(alignment: PortModelAlignment) {
    super({
      type: "concat",
      name: alignment,
      alignment: alignment,
    });
  }

  createLinkModel(): LinkModel {
    return new DefaultLinkModel();
  }
}
