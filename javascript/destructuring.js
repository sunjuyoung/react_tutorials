
/* var candyMachine ={
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function(){
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

 */

const candyMachine2 = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};

const { getCandy,status:{count} } = candyMachine2;


//배열 비구조화

var array = ['nodejs',{},10,true];
var node = array[0];
var obj =  array[1];
var bool  =  array[array.length-1];


const array1 = ['nodejs',{},10,true];
const [nodejs,objj,,booll] = array1;

console.log(nodejs);
console.log(objj);
console.log(booll);