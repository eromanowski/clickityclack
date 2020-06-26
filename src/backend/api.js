const express = require('express');
const { delay } = require('./clickyBoard');

module.exports = (board) => {
    const router = express.Router();

    router.get('/test', async (req, res) => {
        for(let i = 0; i < 16; i++) {
            board.set(i, true);
            await board.apply();
            await delay(50);
            board.set(i, false);
            await board.apply();
        }
    
        res.sendStatus(200);
    });
    
    router.post('/turnOn', async (req, res) => {
        board.set(req.body.relayNum-1, true);
        await board.apply();
        res.sendStatus(200);
    });
    
    router.post('/turnOff', async (req, res) => {
        board.set(req.body.relayNum-1, false);
        await board.apply();
        res.sendStatus(200);
    });

    return router;
};


