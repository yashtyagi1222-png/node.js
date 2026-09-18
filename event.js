import EventEmitter from "node:events";

const emitter = new EventEmitter()

//Register Event
emitter.on("Orderplaced", (orderName,value)=>{
    console.log(`Order placed for ${orderName} with value ${value} has been placed successfully`);

})
emitter.on("Orderplaced", ()=>{
    console.log('Notification has been send successfully');
})

emitter.on("Orderplaced", ()=>{
    console.log('inventory has been updated successfully');
});

//trigger the event
emitter.emit("Orderplaced", "Iphone 18 pro max", 100000)
emitter.listenerCount("Oder placed")