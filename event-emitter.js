const EventEmitter = require("events")
const myEmitter = new EventEmitter()

// listener

myEmitter.on("birthday", () => {
    console.log("happy birthday")
})

myEmitter.on('birthday', (gift)=>{
    console.log(`i will send  a ${gift}`)
})
myEmitter.emit('birthday', "watch")