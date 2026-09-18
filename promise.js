const promise1 = new Promise((resolve, reject)=>{
let success = true
if(success){
    resolve({
 Username: "KUNAL KUMAR",
 location: "Ghaziabad"

    })
}
else{
    reject(new Error("User not fetched"))
}
})
console.log(promise1)

promise1.then((response)=>{
console.log(response);
}).catch((error)=>{
    console.log(error.message);
})