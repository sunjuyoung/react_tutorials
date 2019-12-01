const http = require('http');
/* 
http.createServer((req,res)=>{

    res.write('<h1>hello NOde</h1>');
    res.end('<p>hello server</p>');

}).listen(8080,()=>{
    console.log('8080포트에서 서버대기중')
});
 */

const server =
http.createServer((req,res)=>{

    res.write('<h1>hello NOde</h1>');
    res.end('<p>hello server</p>');

});
server.listen(8080);
server.on('error',(error)=>{
    console.log(error);
});



