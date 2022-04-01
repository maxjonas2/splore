const express = require('express');
const imagesRouter = require("./routes/images.router");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.end('hello world');
})
app.use('/images', imagesRouter);

module.exports = app;