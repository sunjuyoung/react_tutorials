const { odd,even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length%2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(22));
console.log(checkStringOddOrEven("노오드"));