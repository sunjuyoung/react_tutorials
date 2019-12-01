package com.test01;

public class Calculator {
	
	private int memory;
	
	public int getMemory() {
		
		return memory;
	}
	
	public void setMemory (int m){
		this.memory = m;
		
		try {
			Thread.sleep(2000);
		}catch(InterruptedException e) {
			
		}
		System.out.println(Thread.currentThread().getName() + ":"+ this.memory);
	}

}
