//Import the library frist
const { readFile } = require('fs');


const promise = new Promise((resolve,reject)=>{
    const a = fetch("http://www.boredapi.com/api/activity/")
    resolve(a)
})

promise.then((response)=>{
    console.log(response.json())
})
console.log('After1')
console.log('After2')
console.log('After3')
console.log('After4')