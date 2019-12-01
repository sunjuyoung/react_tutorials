const arr = ["b","c","d"];
arr.push("r");
console.log(arr);
arr.pop();
console.log(arr);



const arr1 = [{name:"sun"},{name:"hi"},{name:"gogo"}];



arr1.sort

for(let i=0; i<arr1.length; i++){
  console.log(arr1[i]["name"]);
}
console.log("---------------------------");

arr1.sort((a,b)=> a.name > b.name);

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]["name"]);
  }
  
console.log("---------------------------");

arr1.sort((a,b)=>a.name[1] < b.name[1]); //name프로퍼티의 두번째 글자의 알파벳 역순으로 정렬

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]["name"]);
  }


console.log("------------------------");
console.log();


//findIndex
const o = [{id:5,name:"sun"},{id:7,name:"chan"}];

console.log(o.findIndex(i=>i.id === 5));
console.log(o.findIndex(i=>i.name === "chan"));

//find
//인덱스가 아닌 요소 자체를 원할떄

console.log(o.find(i=>i.id === 7)); //객체 {id: 7, name: "chan"}


//배열의 각 요소를 첫 번째 매개변수, 현재 요소의 인덱스와 배열 자체도 매개변수로 받는다.
//특정 인덱스보다 뒤에있는 제곱수를 찾는다.
const arr2 = [2,6,4,77,5,34,87,16];
console.log(arr2.find((x,i)=> i > 2 && Number.isInteger(Math.sqrt(x))));

//some 
//조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true 반환 찾지 못하면 false

console.log(arr2.some(x=>x%2===0)); //true
console.log(arr2.some(x=>x%99===0));

//every
//배열의 모든 요소가 조건에 맞아야 true

console.log(arr2.every(x=>x%2===0)); //false


//map
//배열 요소를 변형합니다.
const cart = [{name:"sun" , price :33.3},{name:"GUN",price:22.95}];
const names = cart.map(x=>x.name);
console.log(names);
const prices = cart.map(x=>x.price);
console.log(prices);
const discountPrices = prices.map(x=>x *0.8);
console.log(discountPrices);

//콜백함수는 각 요소에서 호출할때 요소 자체와 요소 인덱스 
//배열 전체를 매개변수로 받습니다.(배열 매개변수는 유용하지않다)

//두 배열에 상품과 가격이 따로 저장되어있는데 이 둘을 객체로 결합한다
const items = ["Widget","Gadget"];
const pricetag = [22.4,55.7];
const cart1 = items.map((x,i)=>({name:x,price:pricetag[i]}));
console.log(cart1[0],cart1[1]);

