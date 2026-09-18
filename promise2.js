const promise1 = new Promise((resolve, reject) => {
    let user = true
    if (!user) {
        reject({
            status: "fail",
            message: new Error("User not fetched")
        })
    } else {
        resolve({
            username: "KUNAL KUMAR",
            location: "MEERUT"
        })
    }
})
const promise2 = new Promise((resolve, reject) => {
    let orders = true
    if (orders) {
        resolve({
            orderId: 101,
            ordername: "smartphone"
        })
    } else {
        reject({
            status: "fail",
            message: new Error("Orders not fetched")
        })
    }
})
Promise.all([promise1, promise2])
//.then((response) => {
   //     console.log(response);
  //  })
   // .catch((error) => {
  //      console.error(error.message);
   // })

   Promise.race([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    })
   Promise.allSettled([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    })