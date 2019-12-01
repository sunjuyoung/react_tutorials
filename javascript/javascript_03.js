const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);

console.log("--------------------------");
const arr1 = [{ name: "suzan" }, { name: "Jin" }, { name: "kim" }];

arr1.sort(); //바뀌지 않는다
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log("--------------------------");
arr1.sort((a, b) => a.name > b.name); //알파벳 순으로 정렬
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log("--------------------------");

arr1.sort((a, b) => a.name[1] < b.name[1]);// name프로퍼티의 두번째 글자의 알파벳 역순으로 정렬
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log("--------------------------");

const o = { name: "Jerry" };
const arr2 = [1, 5, "a", o, true, 5, [1, 2], "9"];
//indexof === 정확히 일치하는 첫번째 요소의 인덱스를 반환한다 찾지못하면 -1 반환
console.log(arr2.indexOf(o));
console.log(arr2.indexOf([1, 2]));


//map은 배열 요소 변형합니다
const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.99 }];
const names = cart.map(x => x.name); console.log(names); //Array(2) ["Widget", "Gadget"]
const price = cart.map(x => x.price); console.log(price);
const disCountPrice = price.map(x => x * 0.8); console.log(disCountPrice);

//문자열로 이루어진 배열을 객체 배열로 변형
//화살표 표기법에서 객체 리터럴의 중괄호를 블록으로 판단하기때문에 객체를 괄호로 감싼다.
const items = ["widget", "gadget"];
const prices = [9.99, 8.88];
const cart1 = items.map((x, i) => ({ name: x, price: prices[i] }));
console.log(cart1[1], cart1[0]);


console.log("--------------------------");
const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; value++)
        cards.push({ suit, value });

for (var i = 0; i <= 12; i++)
    console.log(cards[i]);



//filter
//value=2 인 카드 
console.log("--------------------------");
const value2 = cards.filter(c => c.value === 2);

for (var i = 0; i < value2.length; i++)
    console.log(value2[i]);

cards.filter(x => x.suit === 'C');


console.log("--------------------------");
const value3 = cards.filter(x => x.value > 10);
for (var i = 0; i < value3.length; i++)
    console.log(value3[i]);

console.log("--------------------------");
const card1 = cards.filter(x => x.value > 10 && x.suit === 'C');
for (var i = 0; i < card1.length; i++)
    console.log(card1[i]);



//map , filter 결합

function cardToString(c){
    const suits = {'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};
    const values = {1:'A',11:'J',12:'Q',13:'K'};
//cardToString 호출할때마다 매번 값을 만드는 건 그리효율적인 방법은아니다

for(let i=2; i<=10; i++)values[i] = i;
return values[c.value]+suits[c.suit];

}

//value가 2인카드
const v2 = cards.filter(c=>c.value===2).map(cardToString); //["2♥", "2♣", "2♦", "2♠"]
console.log(v2);

const e3 = cards.filter(c=> c.value >10 && c.suit === 'H').map(cardToString); //["J♥", "Q♥", "K♥"]
console.log(e3);

