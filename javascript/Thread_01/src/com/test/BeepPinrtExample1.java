package com.test;

import java.awt.Toolkit;

public class BeepPinrtExample1 {

	public static void main(String[] args) {

		
		Toolkit toolkit = Toolkit.getDefaultToolkit();
		
		for(int i=0; i<6; i++) {
			toolkit.beep();
			try {
				Thread.sleep(500); //0.5초간 일시 정지
			}catch(Exception e) {
				
			}
		}
		
		for(int i =0; i<6; i++) {
			System.out.println("띵");
			try {
				Thread.sleep(500);
			}catch(Exception e) {
				
			}
		}
		
		
	}

}
