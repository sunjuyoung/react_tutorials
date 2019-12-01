package com.test01;

public class User2 extends Thread{

	
	private Calculator2 cal;
	
	public void setCalculator(Calculator2 cal) {
		this.setName("User2");
		this.cal=cal;
		
	}
	
	
	public void run() {
		cal.setMemory(50);
	}
}
