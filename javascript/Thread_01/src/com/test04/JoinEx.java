package com.test04;

public class JoinEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		SumThread sum = new SumThread();
		
		sum.start();
		
		try {
			sum.join();//sumThread가 종료될때까지 메인 스레드는 일시 정지  없다면 밑에 합은 0으놀 나온다
			
		}catch(Exception e) {
			
		}
		
		System.out.println("1_100까지 합" + sum.getSum());
		
	}

}
