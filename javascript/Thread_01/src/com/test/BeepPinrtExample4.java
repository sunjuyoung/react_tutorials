package com.test;

import java.awt.Toolkit;

public class BeepPinrtExample4 {

	public static void main(String[] args) {

		Thread mainThread = Thread.currentThread();
		System.out.println(mainThread.getName());
		
		
		//BeepThread 클래스를 이용해서 작업 스레드 객체를 생성
		Thread th = new BeepThread();
		System.out.println(th.getName());
		th.setName("띵띵띵");
		System.out.println(th.getName());
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
