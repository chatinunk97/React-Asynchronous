const { readFile } = require("fs");

// readFile("user.json", "utf-8", function (err, data) {
//     text = JSON.parse(data);
//     console.log(text)
// });

function readFilePromise(path, encoding) {
  const promise = new Promise((resolve, reject) => {
    readFile(path, encoding, function (err, data) {
      if (err === null) {
        resolve(JSON.parse(data));
      }
      reject(err)
    });
  });
  return promise;
}

// readFilePromise("user.json", "utf-8")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log(response);
//   })
  // .finally(()=>console.log("########### FUNCTION ENDED ##########"));


  ///// Promise All
// let p1 = readFilePromise("user.json", "utf-8")
// let p2 = readFilePromise("product.json", "utf-8")

// const result = Promise.all([p1,p2])
// result.then((response)=>{
//   console.log(response[0].firstName,response[1].name)
// }).catch(err=>console.log(err)).finally(()=>console.log(" ##### END PROMISE ALL !! #####"))


/// Async Function
async function run(){

  try{
    const p1 = await readFilePromise('user.json','utf-8')
    const p2 = await readFilePromise('product.json','utf-8')
  
    console.log(p1.firstName + "  :  " + p2.name)
    return (p1.firstName)
  } catch(err){
    console.log(err)
  }

}
b = run()
console.log(b)