package com.test05;

public class ConsummerThread extends Thread{

	
	
	private DataBox box;
	
	public ConsummerThread(DataBox box) {
		this.box=box;
	}
	
	
	public void run() {
		for(int i=1; i<4; i++) {
			String data= box.getDate();
		}
	}
}
