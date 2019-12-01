
//let


//let 블록 유효 번위를 갖는 지역 변수 선언 
//var let 가장 큰 차이점은 let으로 선언한 변수의 유효 번위 가 블록 안이라는 점입니다

let x = "outer x";

{
    var s = "hi";
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);

}
console.log(s);
console.log(x);
//console.log(y);  //ReferenceError: y is not defined


//const

//let문과 동일 단 반드시 초기화해야 한다는 차이점이 있다

const c =2;
//c=3; //TypeError: Assignment to constant variable.


//상수 값이 객체이거나 배열일 경우에는 프로퍼티 또는 프로퍼티 값을 수정할 수 있다
const origin = {x:1,y:2};
origin.x = 3;
console.log(origin);

//익명함수 무명함수 함수리터럴 이름이 없는 함수
//함수 선언문 끝에는 세미클론을 붙일 필요가 없지만 함수 리터럴을 사용할 때에는 붙여야 한다.

//함수 리터럴로 정의한 익명함수는 변수에 할당한 후에야 비로서 square라는 이름을 갖게되고 호출할수 있게 된다.
//console.log(square(5)); //TypeError: square is not a function
var square = function(x) {return x*x;};

console.log(square);
console.log(square(5));



//객체의 메서드

var circle={
    center :{x:1.0,y:2.0},
    radius : 2.5,
    area : function(){
        return Math.PI * this.radius * this.radius;
    }
}
//this는 그 함수를 메서드로 가지고있는 개체를 가리킵니다.
console.log(circle.area());

//메서드또한 프로퍼티의 일종이므로 나중에 추가할 수 있습니다
circle.translate = function(a,b){
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
}

circle.translate(3,3);
console.log(circle.center);
console.log(circle); //Object {center: Object, radius: 2.5, area: , translate: }


var a = ["A","B","C"];

for (var i in a) console.log(i);
console.log(a.hasOwnProperty("3"));
console.log(a.hasOwnProperty("2"));

