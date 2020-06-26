const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const { ClickyBoard } = require('./clickyBoard');

const app = express()
const port = 3000;
const board = new ClickyBoard();

app.use(bodyParser.json())

async function start() {
    await board.openConnection();
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}

app.use('/api', api(board));
start();
