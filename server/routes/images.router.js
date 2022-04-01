const express = require('express');
const path = require('path');

const imagesRouter = express.Router();

imagesRouter.get("/", (req, res) => {
    res.end('images are here');
});

imagesRouter.get("/paths", async (req, res) => {
    res.json(await getPaths());
})

imagesRouter.get("/:number", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "resources/images/image1.png"));
})

function getPaths(){
    const paths = [];
    for(let i = 0; i < 10 ; i++){
        paths[i] = {fileName: 'file' + i, url: 'http://something.com/images/' + i};
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(paths);
        }, 1000);
    })
}

module.exports = imagesRouter;
