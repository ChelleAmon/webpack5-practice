const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile)
});


app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000/')
})