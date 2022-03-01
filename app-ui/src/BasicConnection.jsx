import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';
import "./app.css";
import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';


const Architecture = () => {
    const engine = createEngine();

    const node1 = new DefaultNodeModel({
        name: 'Source',
        color: 'rgb(0,255,0)',
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort(' ');

    const node2 = new DefaultNodeModel({
        name: 'Destination',
        color: 'rgb(255,0,0)',
    });
    node2.setPosition(400, 100);
    let port2 = node2.addInPort(' ');

    const link = port1.link < DefaultLinkModel > (port2);
    console.log(link);


    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.setModel(model);

    return <CanvasWidget className='srd-demo-canvas' engine={engine} />;
};

function BasicConnection() {
    return (
        <div className='BasicConnection'>
            <Architecture />
        </div>
    )
}
export default BasicConnection