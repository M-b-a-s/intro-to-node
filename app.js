// IMPORTING MODULES

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


// WORKING WITH USER PROMPT
// const readline = require('readline');

// const rl = readline.createInterface({ 
//     input : process.stdin,
//     output : process.stdout
//  });


//  let num1 = Math.floor((Math.random() * 10) + 1); 
//  let num2 = Math.floor((Math.random() * 10) + 1);
 
//  let answer = num1 + num2;

//  rl.question(`What is ${ num1 } + ${ num2 }? \n`,(userInput) => {
//     if(userInput.trim() == answer) {
//         rl.close();
//     } else {
//         rl.setPrompt('Incorrect response please try again\n');
//         rl.prompt()
//         rl.on('line', (userInput) => {
//             if(userInput.trim() == answer) {
//                 rl.close()
//             } else {
//                 rl.setPrompt(`your answer of ${ userInput } is incorrect, please try again\n`)
//                 rl.prompt()
//             }
//         })
//     }
//  });

//  rl.on('close', () => {
//     console.log('Correct');
//  });

// WORKING WITH THE FILE SYSTEM MODULE
// -- the file system alloows us to create, read an delete files and folders

// const fs = require('fs');
// create a file
// fs.writeFile('example.txt', "this is a sample text", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created');   
//         fs.readFile('example.txt', 'utf8',(err, file) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// })
// RENAME FILE
// fs.rename('example.txt', 'sample.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('successfully renamed the file');
//     }
// })

// APPEND DATA TO THE FILE 

// fs.appendFile('sample.txt', ' some data being appended', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successfully appended data to the file');
//     }
// })

// DELETE THE FILE
// fs.unlink('example.text', (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('File deleted');
//     }
// })

// CREATE FOLDER
// fs.mkdir('myFolder', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./myFolder/example.txt', 'new file', (err) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('file created inside folder');
//             }
//         })
//     }
// })


// WORKING WITH READABLE AND WRITABLE STREAMS
// const fs = require('fs');
// const readStream = fs.createReadStream('./sample.txt', 'utf8');
// const writeStream = fs.createWriteStream('sample2.txt')
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// PIPES AND PIPE CHAINING
// const fs = require('fs');
// const readStream = fs.createReadStream('./sample.txt', 'utf8');
// const writeStream = fs.createWriteStream('sample2.txt')
// readStream.pipe(writeStream)

// PIPE CHAINING
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
// Gunzip does the reverse of Gzip
const readStream = fs.createReadStream('./sample.txt', 'utf8');
const writeStream = fs.createWriteStream('sample2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

