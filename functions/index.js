const functions = require('firebase-functions');



exports.calculatorbot = functions.https.onRequest((request, response) => {
    
    console.log("request.body.result.parameters: ", request.body.result.parameters);
    
    let params = request.body.result.parameters;

    console.log("params: ", params)

    var sum = Number(params.number1) + Number(params.number2);
    var sub = Number(params.number1) - Number(params.number2);
    var mul = Number(params.number1) * Number(params.number2);
    var div = Number(params.number1) / Number(params.number2);
    var mod = Number(params.number1) % Number(params.number2);


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
    else {
        response.send({
            speech:
                `Invalid operator! I can perform addition, multiplication, division, modulus and subtraction till now.`
        });
    }
});