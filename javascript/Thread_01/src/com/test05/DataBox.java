package com.test05;

public class DataBox {
	private String data;
	
	public synchronized String getDate() {
		
		if(this.data ==null) { //null이면 소비자 스레드를 일시 정지 상태로 만듬
			try {
				wait();
			}catch(InterruptedException e) {
				
			}
		}
		
		String returnValue= data;
		System.out.println("ConsummerThread가 읽은 데이터 : "+ returnValue);
		
		
		data=null; //data필드를 null로 만들고 생산자 스레드를 실행 대기 상태로 만듬
		notify();
		return returnValue;
		
		
		
	}
	
	
	public synchronized void setData(String data) {
		if(this.data !=null) {  //데이터가 널이 아니면 생산자 스레드를 일시 정지
			try {
				wait();
			}catch (InterruptedException e) {
				
			}
		}
		this.data= data;
		System.out.println("ProducerThread가 생성한 데이터 : "+ data);
		notify();
	}

}
