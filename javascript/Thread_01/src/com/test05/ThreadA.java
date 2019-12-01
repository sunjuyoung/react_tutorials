package com.test05;

public class ThreadA extends Thread{
	
	private WorkObject work;
	
	public ThreadA(WorkObject work) {  //공규 객체를 매개값으로 받아 필드에저장
		this.work=work;
	}
	
	
	public void run() {
		for(int i=0; i<10; i++) {
			work.methodA();
		}
	}

}
