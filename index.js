// local modules

const {a, add} = require("./local-1")
const {a: a2, add: add2} = require("./local-2")

// console.log(add2(a2, 3, a))

// built-in-modules
const path = require("path")


console.log(path.join("/home/rah/projects/level-2/learning-node/", "local-2.js"))