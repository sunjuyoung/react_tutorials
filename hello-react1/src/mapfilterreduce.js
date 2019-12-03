
const array =[
    {id:1,value:true},
    {id:2,value:true},
    {id:3,value:true},
    {id:4,value:true},
    {id:5,value:true},

];

let nextArray = array.concat({id:1,value:false});

nextArray.map((item,i)=>{
    if(item.value === false){
        console.log(i);
    }
});

let testArray = [];
console.log(testArray);
nextArray.map((item,i)=>{
    if(item.value === false){
        console.log(i);
    }else{
        testArray.push({...item});
    }
});

console.log(testArray);

testArray.filter((item,i)=>{
    if(item.id === 2){
        testArray.concat({number:33});
    }
});

console.log(testArray);



const cards = [];
for (let suit of ['H','C','D','S'])
    for(let value=1; value<14; value++){
        cards.push({suit,value});
    }

    console.log(cards);
    console.log('\u2665');

    
    //배열의 각 요소가 아닌 배열전체를 변형하는 reduce
    //배열의 숫자를 더한다.
    const arr = [2,3,4,5];
    const sum = arr.reduce((a,x)=> a+=x);
    //누적값 a 와 배열요소 x
    //누적값 a의 초기값은 0이다.

    console.log(sum);

    var arr1 = [2,3,4,5];
    var sum1 = arr1.reduce((a,x)=>a+=x);
    arr1.reduce((a,x)=>{
        console.log(a);
    },2);


    console.log(sum1);


    const words = ["Bable","naver","google","Anger","sun","ju"];

    const alphabet = words.reduce((a,x)=>{
        if(!a[x[0]]) a[x[0]] = [];

        a[x[0]].push(x);

        return a;
    },{});


    console.log(alphabet);






















































































