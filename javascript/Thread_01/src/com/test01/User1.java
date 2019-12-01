package com.test01;

public class User1 extends Thread{

	
	private Calculator2 cal;
	
	
	public void setCalculator(Calculator2 cal) {
		this.setName("User1");
		this.cal = cal;
	}
	
	public void run() {
		cal.setMemory(100);
		
	}
}
