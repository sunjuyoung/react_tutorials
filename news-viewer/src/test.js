function increase(number,callback){
    setTimeout(()=>{
        const result = number + 10;
        if(callback){
            callback(result);
        }
    },1000)
}

increase(0,result =>{console.log(result)});





function increase1(number){
    const promise = new Promise((resolve,reject) =>{
        //resolve는 성공 , reject 실패
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50){
                //50보다 높으면 에러 발생시키기
                const e = new Error('NumberTooBig');
                return reject(e);
            }
            resolve(result) // number 값에  +10 후 성공 처리
        },1000);
        
    });
    return promise;
}

increase1(0)
    .then(number=>{
        //Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
        console.log(number);
        return increase1(number);
    })
    .then(number=>{
        //Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
        console.log(number);
        return increase1(number);
    });