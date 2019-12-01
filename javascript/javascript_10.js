let funds = 50;
let round =0;

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "dia"][(Math.floor(Math.random() * 6))];
}
while (funds > 1 && funds < 100) {

    ++round;

    const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, dia: 0 };

    let totalbet = rand(1, funds);
    console.log("\n");
    console.log(`${round}판`);
    console.log("총 걸 금액:" + totalbet);

    if (totalbet === 7) {  //7이 나오면 heart에 몰빵
        totalbet = funds;
        bets.heart = totalbet;
    } else {  //그 판에 걸 돈 분배

        let remain = totalbet;

        //무작위로 돈을 건다
        do {

            let bet = rand(1, remain); //무작위 돈
            let face = randFace();  // 무작위 카드
            bets[face] += bet;  // 건다
            remain -=bet;

        } while (remain > 0);

    }

        funds = funds - totalbet;

        //주사위 3번 굴린다 , 무작위 카드 세장 선택
        const hand = [];
        for (let i = 0; i < 3; i++) {
            //hand[i]= randFace();
            hand.push(randFace());
        }

        //딴 돈을 가져온다
        let win = 0;
        for (let i = 0; i < hand.length; i++) {
            let face = hand[i];
            if (bets[face] > 0) win += bets[face];
        }
        console.log(`딴 금액 : ${win}`);
        funds = funds + win;

        let loose = totalbet - win;
        console.log(`읽은 금액 : ${loose}`);

    }
  
    console.log("끝" + round);
   





