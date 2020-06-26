const i2c = require('i2c-bus');

class ClickyBoard {
    constructor() {
        this.state = 0;
        this.CLICKY_ADDR = 0x20;
    }
 
    set (relayNum, state) {
     const mask = 1 << relayNum;
     if(state) {
         this.state = this.state | mask;
     } else {
         this.state = this.state & ~mask;
     }
    }  
 
    get (relayNum) {
      const mask = 1 << relayNum;
      return (this.state & mask) != 0;
    }
 
    async apply () {
     let low = this.state & 0x00ff;
     let high = (this.state & 0xff00) >> 8;
     let onBuffer = Buffer.from([~low, ~high]);
     await this.conn.i2cWrite(this.CLICKY_ADDR, onBuffer.length, onBuffer);
    }
 
    async openConnection () {
     this.conn = await i2c.openPromisified(1);
    }
 
    async closeConnection () {
     await this.conn.close(); 
    }
 }
 
function delay (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { ClickyBoard, delay };