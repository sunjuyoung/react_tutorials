//scope

function f(x){
    return x+3;
}

console.log(f(5));
//console.log(x);  //x의 스코프 는 함수f  -> 함수를 호출할때까지 바디의 정해진 매개변수는 존재하지않는다

//선언 declaration 정의 definition        
//존재를 알리고 값을 부여한다




//정적 스코프는 어떤 변수가 함수 스코프안에 있는지 함수를 정의할 떄 알 수 있다는 뜻입니다
const i =3;
function f1(){
    console.log(i);
    console.log(j);
}
{
    const j=5;
    f();
}

//closer
//블록 스코프와 그 부모인 전역 스코프가 클러저를 형성합니다.
//globalFunc 호출하면 이 함수는 스코프에서 빠져나왔음에도 불구하고 blockVal에 접근할수 있습니다.

let globalFunc;
{
    let blockVar= 'a';
    globalFunc = function(){
        console.log(blockVar);
    }
}

console.log(globalFunc());


//스포크안에 함수를 정의하면 해당 스코프는 더 오래 유지됩니다
//일반적으로 접근 할수 없는 것에 접근할수 있습니다

let f2;
{
    let o ={note:'Save'};
    f2=function(){
        return o;
    }
}

let oRef =f2();
oRef.note = "Not Safe";

console.log(oRef);
console.log(oRef.note);

//즉시호출 함수

const message = (function(){
const secret = "i am your father";
return `The secret is ${secret}....`;

})();

console.log(message);

//count 는 IIFE안에 안전하게 보관되어 손댈 방법이 없다
const f3 = (function(){
let count =0;
return function(){
    return `i have been called ${++count} time.`;
}

})();
console.log(f3());
console.log(f3());
console.log(f3());


//x2;  
//let x2 = 3; //정의 되지 여기까지 않아 도달할수없다



x3;
var x3 = 3; //현재 스코프안이라면 어디서든 사용할수 있으며 선언하기도 전에 사용할수 있다
console.log(x3);
//끌어올린다는 hoisting 매커니즘 var선언한 변수를 맨위로 끌어올린다


f6();
function f6(){
    console.log('f');
}


//f7();  //ReferenceError
let fun = function(){
    console.log('f');
}



//사각지대

if(typeof x4 === "undefined"){
    console.log("x doesn't exist or is undefined");
}else{
    //x를 사용해도 안전한 코드
}


if(typeof x5 === "undefined"){
    console.log("x doesn't exist or is undefined");
}else{

}

let x5 =5;

