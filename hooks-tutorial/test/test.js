const arr = [1,2,3,4,5,6,7,8];

const sum1 = arr.reduce((a,b)=>a+b);
const sum2 = arr.map((a,i)=>{
    return a;
});


console.log(sum1);
console.log(sum2);


