function anymethodOutput(promise1, promise2) {
    return Promise.any([promise1, promise2])
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
}