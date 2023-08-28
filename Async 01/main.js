// function a() {
//   console.log("a run");
// }

// function b(fn) {
//   setTimeout(() => {
//     for (let i = 0; i < 100_000_000; i++) {}
//     console.log("b run");
//     fn('output from b')
//   }, 0);
// }

// function c() {
//   console.log("c run");
// }

// function d(inp1){
//   console.log('FN D , Output is :: ' + inp1)
// }

// a();
// b(d);
// c();

// console.log('Before Set Timeout')
// setTimeout( () => {console.log('Time out callback!!')}, 0 )
// console.log('After set Timeout')

// ES Module this import way cannot use with Node JS
//import { readFIle} from 'fs'

// Common JS
//// Importing readFile from Library fs (File System)
const { readFile } = require('fs'); /// This is like destructuring  => finding the keyvalue that has the key readFile
const { parse } = require('path');
// readFile('user.json',{encoding:'utf-8'}, (err,data)=>{
//     console.log(err)
//     console.log(data)
// });

let a ;
readFile('user.json','utf-8',(err,data)=>{
    const parsedData1 = JSON.parse(data);
    console.log(parsedData1.firstName)
    
    readFile('product.json','utf-8',(err,data)=>{
        const parsedData2 = JSON.parse(data);
        console.log(parsedData2.name)
    })
})

