const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const clientPath = path.resolve(__dirname, '../dist')

app.use(express.static(clientPath))

app.get('/hello-world', (req,res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile)
});

app.get('/dog', (req,res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/dog.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile)
});

app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000')
})