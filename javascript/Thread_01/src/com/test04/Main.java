package com.test04;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		ThreadA a = new ThreadA();
		ThreadB b = new ThreadB();
		
		
		a.start();
		b.start();
		
		try {
			Thread.sleep(3000);
		}catch(Exception e) {
			
		}
		a.work = false;  //b만 실행
		
		try {
			Thread.sleep(3000);
		}catch(Exception e) {
			
		}
		a.work = true; 
		
		try {
			Thread.sleep(3000);
		}catch(Exception e) {
			
		}
		
		a.stop = true;
		b.stop= true;
		
		
		
	}

}
