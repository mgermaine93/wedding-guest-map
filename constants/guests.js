const fs = require('fs');

fs.onload = function (event) {
    console.log(event.target.result);
}

fs.readAsText("wedding-geodata.csv")

// let guests = {
//     // TBD
// }