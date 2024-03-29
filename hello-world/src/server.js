const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const clientPath = path.resolve(__dirname, '../dist')

app.use('/', express.static(clientPath))

app.get('/', (req,res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile)
});

app.listen(9001, () => {
    console.log('Application is running on http://localhost:9001')
})