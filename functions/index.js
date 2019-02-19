
const functions = require('firebase-functions');
exports.calculatorbot = functions.https.onRequest((request, response) => {
console.log("request.body.result.parameters: ", request.body.result.parameters);
let params = request.body.result.parameters; 
var sum = parseFloat(params.number1) + parseFloat(params.number2);
var sub = parseFloat(params.number1) - parseFloat(params.number2);
var mul = parseFloat(params.number1) * parseFloat(params.number2);
var div = parseFloat(params.number1) / parseFloat(params.number2);
var mod = parseFloat(params.number1) % parseFloat(params.number2);
    if (params.operator === "addition") {
        response.send({
                speech:
                `Here is your answer: ${sum}`             
    });
}
    else if (params.operator === "subtraction") {
                response.send({
                        speech:
                        `Here is your answer: ${sub}`            
            });
        }
    else if (params.operator === "multiplication") {
               response.send({
                       speech:
                       `Here is your answer: ${mul}`            
            });
       }
    else if (params.operator === "division") {
        response.send({
                speech:
                `Here is your answer: ${div}`            
            });
       }
    else if (params.operator === "modulus") {
        response.send({
                speech:
                `Here is your answer: ${mod}`            
            });
       }
});