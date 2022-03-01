import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';
import "./app.css";
import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';
import { useState, useEffect } from 'react';


const Architecture = () => {
    const engine = createEngine();
    const [links, setLinks] = useState([])
    const node1 = new DefaultNodeModel({
        name: 'Source',
        color: 'rgb(0,255,0)',
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort(' ');

    // node1.addListener({
    //     selectionChanged: () => { console.log("selectionChanged") }
    // });
    // node1.addListener("drag", function (event) {
    //     console.log("source node is dragged");
    // })
    const node2 = new DefaultNodeModel({
        name: 'Destination',
        color: 'rgb(255,0,0)',
    });
    node2.setPosition(400, 100);
    let port2 = node2.addInPort(' ');

    // node2.addListener({
    //     selectionChanged: () => { console.log("selectionChanged") }
    // });
    // node2.addListener("drag", function (event) {
    //     console.log("destination node is dragged");
    // })
    const link = port1.link < DefaultLinkModel > (port2);

    const model = new DiagramModel();
    model.registerListener({
        nodesUpdated: function (e) {
            console.log("Nodes Updated")
        },
        linksUpdated: function (e) {
            console.log(e.link)
            // const linkJSON = { src: e.link.sourcePort.options.id, dst: e.link.targetPort.options.id }
            // console.log(linkJson);
        },
    });
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