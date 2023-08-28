let timeout = 500
function printStuff(input){
    
    setTimeout(()=>console.log(input),timeout)
    timeout += 500
}

const alphabetGen = ()=>{
    for( let i = 65 ; i < 65+26 ; i++){
        printStuff((String.fromCharCode(i)))
        
    } 
}
alphabetGen()