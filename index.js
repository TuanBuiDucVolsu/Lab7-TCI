var myModule = require("./my-module.js")

myModule.hello()

console.log('PI: ' + myModule.PI)

var rectangle = new myModule.Rectangle(2,3)
rectangle.showInfo()
rectangle.showArea()
rectangle.showCircuit()
