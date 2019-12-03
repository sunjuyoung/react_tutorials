const array=[1,2,3,4,5,6,7,32];

const bigger  = array.filter(number=> number > 31);

console.log(bigger);

// true, false 값을 반환해야 배열에 포함된다.

const nextArrayBad = array; //복사가아닌 같은 배열을 가리킨다
nextArrayBad[0] = 100;
console.log(nextArrayBad === array);

const nextArrayGood = [...array]; //배열 복사
nextArrayGood[0] =1;
console.log(nextArrayGood === array);

const object = {
    foo : 'bar',
    value : 1
};

const nextObjectBad = object;
nextObjectBad.value = nextObjectBad + 1;
console.log(nextObjectBad === object);

const nextObjectGood ={
    ...object,
    value : object.value+1
};

const tt = {
    ...object
};

console.log(nextObjectGood);
console.log(tt);

//전개 연산자 (...문법) 을 사용하면 객체나 배열 내부의 값을 복사할때는 얕은 복사
//즉  내부 값이 완전 새로 복사된느 것이 아니라 가장 바깥쪽에 있는 값만 복사
// 따라서 내부 값이 객체 또는 배열이라면 내부의 값 또한 따로 복사해주어야한다
const todos = [{id:1, checked : true},{id:2,checked:true}];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] == nextTodos[0]);

nextTodos[0] = {
    ...nextTodos[0],
    chekced:false
}

console.log(todos[0] === nextTodos[0]);
console.log(todos[1] === nextTodos[1]);
console.log(nextTodos[0]);
console.log(nextTodos[1]);


nextTodos[1] = {
    ...nextTodos[1],
    checked:false
}

console.log(todos[0] === nextTodos[0]);
console.log(todos[1] === nextTodos[1]);
console.log(nextTodos[0]);
console.log(nextTodos[1]);


