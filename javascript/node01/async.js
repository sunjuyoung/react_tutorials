const fs = require('fs');

console.log('start');
fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1 ' ,data.toString());


});

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2',data.toString());
})

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3',data.toString());
})

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('4',data.toString());
})


console.log('끝');
