
//call()
//모든 함수에서 사용 가능하며 , this를 특정 값으로 지정
const bruce = {name:"Bruce"};
const madeline = {name:"Madeline"};

//이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다
function greet(){
    return `Hello I Am ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));


function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

//함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면
//해당 함수가 주어진 객체의 메서드인 것 처럼 사용할 수 있다
update.call(bruce,1949,'singer');
//burce는 이제 {name:"Bruce" , birthYear:1949, occupation :'singer'};

update.call(madeline,1944,'act');

console.log(bruce.birthYear);



//apply
//apply는 매개변수를 배열로 받습니다.
//배열요소를 함수 매개변수로 사용할때 유용합니다
update.apply(bruce,[1999,'actor']);
console.log(bruce);


const arr= [2,5,78,3,1,8];
const max = Math.max.apply(null,arr);
console.log(max);
//this 값에 null을 쓴이유는 math가 this와 관계없이 동작하기 때문 즉, 무엇을 넘기든 관계없다.
console.log(Math.min(...arr));


//update메서드는 this값이 중요하지만 math는 this값이 무엇이단 상관없으므로 확산연산자 그대로 사용가능하다
const newBruce = [1940,"superstar"];
update.call(bruce,...newBruce); // == apply(bruce,newBruce)
console.log(bruce);



//bind
//this 값을 항상 bruce가 되게끔

const updateBruce = update.bind(bruce);

updateBruce(1950,"actor");
console.log(bruce);

updateBruce(madeline,1989,"super"); 
console.log(bruce);






