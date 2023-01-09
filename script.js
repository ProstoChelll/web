const delOnThree = (c) =>{
    c = [];
    for (i = 0 ;c.length < 100; i++){
        if ( i % 3 === 0 ){c.push(i);}
    }
    return c;
}
let arr = delOnThree();
console.log(arr);


const sumArr = (j) =>{
    let sum = 0;
    for (let i = 0; i < j.length; i++){
        sum = sum + j[i];
    }
    return sum;
}

let num = [10, 10, 10, 10];
console.log(sumArr(num));


const averageValue = (k) =>{
    let sum = sumArr(k);
   return sum / k.length;
}

let fd = [5234, 763, 67893];
console.log(averageValue(fd));