import React from "react"
import ReactDOM from "react-dom"
import BasicConnection from './BasicConnection'

// let response = await fetch("localhost: 3000 / api / state / cache", {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.

//   headers: {
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     "components": [
//       {
//         "id": "c1",      // unique identifier for first box created
//         "name": "Source", // name of the box/component
//       },
//       {
//         "id": "c2",
//         "name": "Destination"
//       }
//     ],
//     "links": [
//       {
//         "src": "c1",    // source of the link
//         "dest": "c2"    // destination
//       }
//     ]
//   }) // body data type must match "Content-Type" header
// });
// response = await response.json();
// console.log(response);


ReactDOM.render(
  <React.StrictMode>
    <BasicConnection />
  </React.StrictMode>,
  document.getElementById("root")
)

