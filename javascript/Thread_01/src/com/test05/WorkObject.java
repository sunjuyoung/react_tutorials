package com.test05;

public class WorkObject {
	
	public synchronized void methodA() {
		
		System.out.println("ThreadA의 methodA() 작업 실행");
		notify(); //일시정지상태에있는 ThreadB를 실행 대기상태로 만듬
		
		try {
			wait();
		}catch(InterruptedException e) {
			
		}
	}
	
	
	public synchronized void methodB() {
		System.out.println("ThreadB 의 methodB() 작업 실행");
		notify();
		
		try {
			wait();
		}catch(InterruptedException e) {
			
		}
	}

}
