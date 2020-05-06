import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DiagramEngine,
  PortModelAlignment,
} from "@projectstorm/react-diagrams";
export class Application {
  protected activeModel: DiagramModel;
  protected diagramEngine: DiagramEngine;
  protected operators: Array<String> = [
    "workerType",
    "country",
    "subCategory",
    "hiringManagerLastName",
    "city",
    "jobFamilyGroup",
    "postalCode",
    "workHours",
    "targetHireDate",
    "description",
    "timeType",
    "language",
    "isEverGreenReq",
  ];
  constructor() {
    this.diagramEngine = createEngine();
    this.activeModel = new DiagramModel();
    this.newModel();
  }

  public newModel() {
    this.diagramEngine.setModel(this.activeModel);

    // Creating default nodes for the fields recieved from the ATS
    this.operators.map((operator, index) => {
      let inputNode = new DefaultNodeModel(`${operator}`, "rgb(0,192,255)");
      let outPort = inputNode.addOutPort("Out");
      inputNode.setPosition(100, index * 100);

      let outputNode = new DefaultNodeModel(`${operator}`, "rgb(0,192,255)");
      let inPort = outputNode.addInPort("In");
      outputNode.setPosition(
        inputNode.getPosition().x + 500,
        inputNode.getPosition().y
      );

      this.activeModel.addNode(inputNode);
      this.activeModel.addNode(outputNode);
    });

    let activeModels = this.activeModel.getNodes();
    activeModels.forEach((item) => {
      item.registerListener({
        eventDidFire: (event: any) => {
          /**
           * Reference: https://github.com/projectstorm/react-diagrams/issues/459
           * model.serialize() will return json
           *
           */
          console.log(this.activeModel.serialize());
        },
        eventWillFire: (event: any) => {
          // console.log(event);
        },
      });
    });
  }

  public getActiveDiagram(): DiagramModel {
    return this.activeModel;
  }

  public getDiagramEngine(): DiagramEngine {
    return this.diagramEngine;
  }
}
