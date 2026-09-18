const promise1=new Promise((resolve,reject)=>{
    let user = true
    if(user){
        resolve({
            username:"Kunal",
            userId:1
        })
    }
    else{
        reject(new Error("user not found"))
    }
})
console.log(promise1)

const promise2=new Promise((resolve,reject)=>{
    let order=true
    if(order){
        resolve({
            location:"delhi",
            orderId:123
        })
    }
     else {
        reject(new Error("Order not found"))
    }
}) 
// promise1.finally([promise1,promise2])
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error.name)
// })
// Promise.race([promise1,promise2])
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error.name)
// })
// Promise.race([promise2,promise1])
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error.name)
// })



// Promise.any([promise1,promise2])
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error.name)
// })


Promise.any([promise1,promise2])
.then((response)=>{
    return response
})
.then((response)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error.name)
})