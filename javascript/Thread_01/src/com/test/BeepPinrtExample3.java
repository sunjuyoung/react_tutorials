package com.test;

import java.awt.Toolkit;

public class BeepPinrtExample3 {

	public static void main(String[] args) {

		//Runnable익명 객체 이용

		//Runnable beepTask = new BeepTask();
		
		Thread th = new Thread(new Runnable() {

			@Override
			public void run() {
				Toolkit tk = Toolkit.getDefaultToolkit();
				for(int i=0; i<6; i++) {
					tk.beep();
					try {
						Thread.sleep(500);
					}catch (Exception e) {
						
					}
					
				}
				
			}
			
		});
		
		Thread th1 = new Thread(()->{
			
			//람다식 이용
			
		});
		
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
