global.fetch = require('node-fetch');
global.fs = require("fs");

const url = "https://upload.wikimedia.org/wikipedia/commons/9/98/Pet_dog_fetching_sticks_in_Wales-3April2010.jpg";
const path = "temp/sample.jpg";

fetch(url, {mode: 'no-cors'})
.then(response => {
    console.log(response);   
    const fileStream = fs.createWriteStream(path);
    response.body.pipe(fileStream);
});