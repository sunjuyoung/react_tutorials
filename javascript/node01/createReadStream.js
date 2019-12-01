const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt',{ highWaterMark : 16}); //기본값 64kb 16kb으로 낮춤
const data = [];

readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data :',chunk, chunk.length);


});


readStream.on('end',()=>{

    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error',(err)=>{

    console.log('err :' ,err);
});