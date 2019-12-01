package com.test05;

public class ThreadB extends Thread{
	
	private WorkObject work;
	
	public ThreadB(WorkObject work) {
		this.work=work;
	}

	
	public void run() {
		for(int i =0; i<10; i++) {
			work.methodB();
			
		}
	}
}
