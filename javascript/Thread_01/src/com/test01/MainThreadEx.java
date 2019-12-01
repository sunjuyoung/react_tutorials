package com.test01;

public class MainThreadEx {
//공유 객체를 사용할때 주의할 점
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Calculator cal = new Calculator();
		
		Calculator2 cal = new Calculator2();
		
		User1 user1 = new User1();
		User2 user2 = new User2();
		
		//user1은 다른 값을 이용하게 된다
		user1.setCalculator(cal);
		user1.start();
		
		
		user2.setCalculator(cal);
		user2.start();
		
		
	}

}
