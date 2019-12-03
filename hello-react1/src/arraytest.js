const Object = {a:1,b:2,c:3};
const nextObject = {...Object , b:222}; //사본을 만들어서 b값만 덮어쓰기
console.log(nextObject);

//배열
const array = [
    {id:1 , value : true},
    {id:2 , value : false},
    {id:3 , value : true},
];

let nextArray = array.concat({id:4});
console.log(array);
console.log(nextArray);

nextArray.filter(item=>item.id !== 2); //id가 2가 아닌 항목

console.log(nextArray.map(item=>(item.id === 1 ? {...item , value :false} : item)));


Object.filter((obj)=>obj.a == 1)




let testArray = [];
nextArray.map(item=>{

    if(item.id === 1){
        testArray.push({...item,value:false});
    }else{
        testArray.push(item);
    }
  

    

});

console.log(testArray,"i");