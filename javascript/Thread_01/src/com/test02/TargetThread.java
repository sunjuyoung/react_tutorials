package com.test02;

public class TargetThread extends Thread{

	
	public void run() {//루핑을 돌며 RUNNABLE 상태를 유지하고
		for(long i=0; i<1000000000; i++) {}
		
		try {
			//1.5초간 정지  ,TIMED_WAITING 상태를 유지한다
			Thread.sleep(1500);
			
		}catch(Exception e) {
			
		}
		for(long i=0; i<1000000000; i++) {} //다시 루핑 RUNNALBE
	}
	
}
