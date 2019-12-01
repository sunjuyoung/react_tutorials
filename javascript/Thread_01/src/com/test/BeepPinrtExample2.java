package com.test;

public class BeepPinrtExample2 {

	public static void main(String[] args) {


		Runnable beepTask = new BeepTask();
		
		Thread th = new Thread(beepTask);
		
		th.start();
		
		for(int i =0; i<6; i++) {
			System.out.println("띵");
			try {
				Thread.sleep(500);
			}catch(Exception e) {
				
			}
		}
		
		
	}

}
