const obj= {};

obj.color = "yellow";

console.log(obj);

obj["hi"] =3;

console.log(obj);

const sam1={
    name :'sun',
    age : 4

};

console.log(sam1);

const sam3 = {

    name : 'hi',
    man : {             //프로미터 값도 객체가 될수 있다.
        age: 11,
        num : "hi",
        ju : "ef"
    },
    young : 123

}
console.log(sam3);
console.log(sam3.man);
console.log(sam3["man"]);

const now = new Date();
console.log(now.getFullYear());



