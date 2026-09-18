//synchronus
console.log("start")
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("End")



//Asynchronous
console.log("Async start")
setTimeout(()=>{
    console.log("settimeout");
}, 2000)
console.log("Async end")



// console.log("start")
// for(let i=0; i<10; i++){
//     console.log(i);
// }
// console.log()