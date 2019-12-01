










function f(o){

    o.message = "f에서 수정함";
    o={
        message : "새로운 객체!"
    };
    console.log(`내부 : o.message = "${o.message}" (할당후)`);

};

let o ={
    message : '초기값'
};//변수가 아닌 객체를 수정 바꾼 내용은 함수 바깥에서도 그대로 반영되어 있음을 알 수있다.
//원시 값과 객체의 차이 

console.log(`f를 호출하기 전 : o.message : "${o.message}"`);

f(o);
console.log(`f를 호출한 다음 : o.message : "${o.message}"`);





/* function f(n){

    if(n<=1) return 1;

    return n*f(n-1);

};
console.log(f(5));


var x = (function(){})();


(function(a,b){console.log("즉시실행"+a+b)})(1,2);
 */



/* console.log("Before timeout : " + new Date());
function f(){
    console.log("After timeout : " + new Date());

}

setTimeout(f,60*1000);//1분
console.log("I happen after setTimeout");
console.log("me too"); */

//비동기적 실행의 가장 큰 목적. 어떤 것도 차단하지 않는다는 것


//함수 f를 setTimeout에 넘겼습니다.
//이름 붙은 함수를 써야하는 타당한 이유가 없다면 일반적으로는 다음과 같이 익명함수를 사용합니다.
/* setTimeout(function(){

    console.log("After timeout : "+ new Date());

},60*1000); */


//setInterval 콜백을 정해진 주기마다 호출하며 clearInterval을 사용할 때까지 멈추지 않습니다./
//분이 넘어가가거나 10회째가 될 때까지 5초마다 콜백을 실행합니다.
/* const start = new Date();
let i =0;
const intervalId = setInterval(function(){
let now = new Date();
if(now.getMinutes() !== start.getMinutes() || ++i>10)
return clearInterval(intervalId);
console.log(`${i}: ${now}`);

},5*1000);

 */

/*  console.log("A");
 setTimeout(function(){
console.log("B");

 },3*1000); */

