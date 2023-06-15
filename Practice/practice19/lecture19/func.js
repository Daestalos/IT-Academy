 function getInfo(par1 = 20){
    // var par1 = par1 || 30;
    // console.log('par1 = ', par1)
    return par1 + 10;
 }

//  console.log(getInfo(10))

const getName = (par) => {
    const fullName = 'Peter ' + par;

    // console.log(arguments);
    return fullName;
}

// console.log(getName('Bobson'));