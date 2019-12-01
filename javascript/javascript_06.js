
//매개 변수가 함수를 결정하지 않는다 매개변수 숫자와 관계없다
function f(x){
    return `in f: x=${x}`;
}

console.log(f());  //in f: x=undefined


//객체 변수 해체
function getSentence({subject,verb,object}){
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject : "I",
    verb : "LOVE",
    object : "JAVASCRIPT"

};


//배열 변수 해체
console.log(getSentence(o));

function getSentence2([subject,verb,object]){

    return `${subject} ${verb} ${object}`;
}

const i = ["I","love","you"];

console.log(getSentence2(i));


//확산 연산자 ... 를 썻서 남는 매개변수를 이요할 수 있습니다.
//함수를 선언할때 확산 연산자는 반드시 마지막 매개변수여야 합니다.
function addPreFix(prefix,...words){

    console.log(words.length);
    //더 좋은 방법이 있다 다음 챕터에서
    const prefixedWords =[];
    for(let i=0; i<words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;

}
console.log(addPreFix("con","verse","vex")); //Array(2) ["converse", "convex"]
console.log(addPreFix("con","verse","hello","vex")); //Array(3) ["converse", "conhello", "convex"]


//매개 변수 기본값
//일반적으로 매개변수 값을 제공하지 않으면 undefined가 값으로 할당됩니다.
//ES6에서는 기본값을 지정할 수 있습니다.

function f(a,b = "default",c=3){
    return `${a} - ${b} - ${c}`;
}

console.log(f(5,6,7));  //5 - 6 - 7
console.log(f(5,6));  // 5- 6 -3
console.log(f(5));   // 5 - default - 3
console.log(f());  // undefined - default - 3

const s = {
    name : 'Wallace',  //원시 값 프로퍼티
    bark : function(){return 'Woof!';}  //함수 프로퍼티(메서드)
};

console.log(s.bark());

//ES6 간편하게 메서드 추가
const s = {
    name : 'Wallace',  //원시 값 프로퍼티
    bark()  {return 'Woof!';}  //함수 프로퍼티(메서드)
};

console.log(s.bark());



