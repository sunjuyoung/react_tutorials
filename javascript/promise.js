const condition = true;  //ture면 resolve , false면 reject
const promise = new Promise((resolve,reject) => {
    if(condition){
        resolve('성공');
    }else{
        resolve('실패');
    }


});

promise
    .then((message)=>{
        console.log(message); //성공한 경우 실행
    })
    .catch((error)=>{
        console.log(error); //실패한 경우 실행
    });

    const sun = new Promise((resolve,reject)=>{

        if(condition){
            console.log("콜백지옥");
        }else{
            console.log("콜백지옥");
        }

    });

sun
    .then((hi)=>{
        console.log("true");
    });



    promise
        .then((message)=>{
            console.log(message);
            return new Promise((resolve,reject)=>{
                resolve(message);
            });
        })
        .then((message2)=>{
            console.log(message2);
            return new Promise((resolve,reject)=>{
                resolve(message2);
            });
        });



