const fs = require('fs')

// reading a file text
const readFile = fs.readFileSync("./texts/read.txt", "utf-8")


//written text
const writtenText = fs.writeFileSync("./texts/write.txt", readFile + "this is my written text")

console.log(writtenText)