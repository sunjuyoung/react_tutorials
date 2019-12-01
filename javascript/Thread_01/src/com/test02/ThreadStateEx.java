package com.test02;

public class ThreadStateEx {

	//StatePrintThread 생성해서 매개값으로 전달받은 TargetThread의 상태를 출력하도록
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		
		StatePrintThread spt = new StatePrintThread(new TargetThread() );

		spt.start();
		
		
	}

}
