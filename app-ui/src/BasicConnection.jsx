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
import axios from 'axios';
// const casual = require('casual');
// module.exports = () => {
//     casual.define('source', function () {
//         return {
//             src: casual.e.link.sourcePort.options.id,
//             dst: casual.e.link.targetPort.options.id,
//         }
//     })
//     const data = {
//         links: [],
//     }
//     return data;
// }
// async function getLinks(){
//     const response=await fetch (end_url);
//     const data=await response.json();
//     const src
// }
const Architecture = () => {
    const engine = createEngine();
    const node1 = new DefaultNodeModel({
        name: 'Source',
        color: 'rgb(0,255,0)',
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort("OUT");

    const node2 = new DefaultNodeModel({
        name: 'Destination',
        color: 'rgb(255,0,0)',
    });
    node2.setPosition(400, 100);
    let port2 = node2.addInPort("IN");

    // node2.addListener({
    //     selectionChanged: () => { console.log("selectionChanged") }
    // });
    // node2.addListener("drag", function (event) {
    //     console.log("destination node is dragged");
    // })
    let link = port1.link(port2);

    const model = new DiagramModel();

    model.registerListener({

        nodesUpdated: function (e) {
            console.log("Nodes Updated")

        },
        linksUpdated: function (e) {
            console.log(e.link)
            console.log(e.link["sourcePort"]["options"]["id"])
            console.log(e.link["targetPort"]["options"]["id"])


            axios({
                method: 'post',
                url: '/api/state/cache',
                data: {
                    "components": [
                        {
                            "id": e.link["sourcePort"]["options"]["id"],// unique identifier for first box created
                            "name": "Source", // name of the box/component
                        },
                        {
                            "id": e.link["targetPort"]["options"]["id"],
                            "name": "Destination"
                        }
                    ],
                    "links": [
                        {
                            "src": e.link["sourcePort"]["options"]["id"],    // source of the link
                            "dest": e.link["targetPort"]["options"]["id"],    // destination
                        }
                    ]
                }
            });
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