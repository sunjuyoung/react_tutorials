package com.test;

import java.awt.Toolkit;

//Runnable로 만들지 않고 Thread의 하위 클래스로 작업스레드를 정의
public class BeepThread extends Thread {

	
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
	
}
