// const alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

function printFunction (letter,time){

    setTimeout(() => {
        console.log(letter)
        console.log('----')
    }, time);

}

function alphabetPrint(timeOut) {
  for(let i = 65 ; i <= 65+26 ; i++){
    printFunction(String.fromCharCode(i),timeOut)
    timeOut += 500
  }
}

alphabetPrint(500)

// function log(ms, cb) {
//   setTimeout(function () {
//     cb;
//   }, ms);
//   //Short hand
//   setTimeout(cb, ms);
// }

// log(1000, function () {
//   console.log("wow");
//   log(1000,function(){console.log('b')})
// });
