

function getGreeting() {
    
    return "Hello world";
}

//함수를 변수에 할당
const d = getGreeting;
console.log(d());

console.log("hello");

//함수를 객체 프로퍼티에 할당
const o = {};
o.d = getGreeting;

console.log(o.d);
console.log("객체 할당 : "  + o.d());

//배열 요소에 할당
const arr = [1,2,3];
arr[1] = getGreeting;
console.log("배열 할당 : "+ arr[1]());


function avg(a,b){
    return (a+b)/2;
}

console.log(avg(4,5));

const a= 5, b=10;
console.log(avg(a,b));

function f(x){
    console.log(`f내부 : x=${x}`);

    x= 5;
    console.log(`f내부 : x=${x} (할당후)`);
}

let x = 3;
console.log(`f를 호출하기 전 : x=${x}`);
f(x);

//함수 바깥의 변수 x에는 아무 영향도 없다 이름은 같지만 둘은 다른 객체
console.log(`f를 호출 후 : x=${x}`);

console.log("-------------------------------------");


//원시 값과 객체의 차이
//함수 안의 c와 바깥의 c는 서로다른 개체 하지만 같은 객체를 가리키고 있습니다.
function sun(c){
    c.message = `f안에서 수정함 (이전 값 : '${c.message}')`;
    c.message = "와더퍽";
}
let c = {message : "초기값"};

console.log(`f를 호출하기 전 : c.message = "${c.message}"`);
console.log( sun(c));
console.log(`f를 호출하기 전 : c.message = "${c.message}"`);




