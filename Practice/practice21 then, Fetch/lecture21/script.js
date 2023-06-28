let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Resolve message');
        resolve('Final!')
        reject('Error')
    }, 5000);
})

// выполняется при resolve
prom.then((data) => {
    console.log(1);
    console.log(data);
})

// выполняется при reject
prom.catch((err) => {
    console.log(2);
    console.log(err);
})


