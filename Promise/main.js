function a() {
  console.log("a");
}

function b(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 18) {
        resolve("Suc");
      } else {
        reject("ERROR !!");
      }
    }, 0);
  });
  return promise;
}

const p = b(10);
// p.catch((response) => {
//   console.log(response);
// });


/////// Method Channing
/// It's just a way of using multiple Method in one line
p.then((response) => {
  console.log("THEN :: " + response);
})
  .catch((response) => {
    console.log("CATCH :: " +response);
  })
  .finally(() => {
    console.log("END FINALLY");
  });

