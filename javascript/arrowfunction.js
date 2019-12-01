var  relationship1 = {
    name:'zero',
    friends:['sun','ju','young'],
    logFriends :function(){
        var that = this; //relationship1 
        this.friends.forEach(function(friend){
                console.log(that.name,friend);
        });

    },
};

relationship1.logFriends();


const relationship2 = {
    name :'hi',
    friends :['kim','park','choo'],
    logFriends (){
        this.friends.forEach(friend =>{ //화살표함수 사용 바깥 스코프인 logFriends() 의 this를 그대로 사용, 상위스코프 this물려받음
                console.log(this.name,friend);
        });
    },

};

relationship2.logFriends();
//
