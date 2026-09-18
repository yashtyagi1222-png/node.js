import fs from 'fs';

console.log("synchronous task");

setTimeout(() => {
    console.log("SetTimeout");
}, 2000)

setInterval(function(){
    console.log("SetInterval");
}, 2000)

//Microtask queue
//nextTick queue

fs.writeFile("notes.txt" , "Hello ELCE-B" , function(err){
    if(err){
        console.log("Err");
        return;
    }
    
    setTimeout(() => {
        console.log("setTimeout Inside fs write method");
    }, 0);
    setImmediate(() => {
        console.log("setImmediate Inside fs write method");
    })

    console.log("File written successfully");

})

setImmediate(() => {
    console.log("SetImmediate");
})


console.log("Another synchronous task");

//timer phase
//pending phase
//ideal or prepare phase
//call phase
//check phase
//close phase


Promise.resolve().then(() => {
    console.log("Promise resolved");
})

process.nextTick(() => {
    console.log("Next tick");
})
