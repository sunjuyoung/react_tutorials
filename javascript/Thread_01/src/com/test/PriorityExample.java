package com.test;

public class PriorityExample {

	//스레드 10개를 생성하고 반복 루핑을 누가 더 빨리 끝내는가 테스트 예제
	//마지막 스레드 우선순위를 가장 높게 해주었다.
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		for(int i=0; i<10; i++) {
			Thread thread = new CalcThread("thread"+i);
			
			if(i != 9) {
				thread.setPriority(Thread.MIN_PRIORITY);
			}else {
				thread.setPriority(Thread.MAX_PRIORITY);
			}
			
			
			thread.start();
		}
		
	}

}
