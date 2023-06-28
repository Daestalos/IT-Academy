async function getInfo(){
    return 'Hello World!';
} 

// console.log(getInfo());

// const result = getInfo();
// result.then(data =>{
//     console.log(data);
// })

const timerInfo = () => {
    let prom = new Promise((res, rej) => {
        setTimeout(() => {
           return rej(10)
        }, 3000)
    })
    return prom;
}

const getData = async () => {
    let count = 0;

    try{
        console.log('Before count:', count);
        count = await timerInfo();
        console.log('After count:', count);
    } catch(err){
        console.log('Err:', err)
    }

}

getData();