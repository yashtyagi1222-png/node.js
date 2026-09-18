function getUser(){
return new Promise((resolve,reject)=>{
    let user = true;
    if(!user){
        reject(new Error("User not exists."));
    }else{
        resolve({
            Username : "Kunal Kumar",
            role : "ML Engineer",
        });
    }
});
}
async function fetchUser(){
const response = await getUser()
console.log(response);
}
fetchUser()
console.log('Hello');

