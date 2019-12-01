package com.test01;


//동기화 메소드
public class Calculator2 {
	
	private int memory;
	
	public int getMemory() {
		
		return memory;
	}
	
	
	//동기화 메소드
	/*
	public synchronized void setMemory (int m){
		this.memory = m;
		
		try {
			Thread.sleep(2000);
		}catch(InterruptedException e) {
			
		}
		System.out.println(Thread.currentThread().getName() + ":"+ this.memory);
	}

*/
	
	//동기화 블록
	//스레드가 동기화 블록을 ㅗ들어가면 this(Calculator객체)를 잠그고 동기화 블록 실행
	public void setMemory (int m) {
		synchronized (this) {//공유 객체인 Calculator의 참조(잠금 대상)
			this.memory = m;
			try {
				Thread.sleep(2000);
			}catch (Exception e) {}
			System.out.println(Thread.currentThread().getName() + ":"+ this.memory);
		}
	}
	

}
