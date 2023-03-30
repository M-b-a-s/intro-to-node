// const tutorial = require('./tutorial.js')
// console.log(tutorial.sum(1,5))
// console.log(tutorial.PI)
// console.log(new tutorial.someMathObject())

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1 + num2);
// } )

// eventEmitter.emit('tutorial', 1,3);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name() {
//         return this._name
//     }
// }

// let mbas = new Person('Mbas');
// let ernest = new Person('Ernest');

// mbas.on('name', () => {
//     console.log('my name is ' + mbas.name);
// })
// ernest.on('name', () => {
//     console.log('my name is ' + ernest.name);
// })

// mbas.emit('name');
// ernest.emit('name');


const readline = require('readline');

const rl = readline.createInterface({ 
    input : process.stdin,
    output : process.stdout
 });


 let num1 = Math.floor((Math.random() * 10) + 1); 
 let num2 = Math.floor((Math.random() * 10) + 1);
 
 let answer = num1 + num2;

 rl.question(`What is ${ num1 } + ${ num2 }? \n`,(userInput) => {
    if(userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt()
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer) {
                rl.close()
            } else {
                rl.setPrompt(`your answer of ${ userInput } is incorrect, please try again\n`)
                rl.prompt()
            }
        })
    }
 });

 rl.on('close', () => {
    console.log('Correct');
 });