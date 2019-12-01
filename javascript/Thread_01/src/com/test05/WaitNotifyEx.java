package com.test05;

public class WaitNotifyEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		WorkObject sharedObj = new WorkObject(); //공유 객체 생성
		
		ThreadA a = new ThreadA(sharedObj);
		ThreadB b = new ThreadB(sharedObj);
		
		a.start();
		b.start();
		
		
	}

}
