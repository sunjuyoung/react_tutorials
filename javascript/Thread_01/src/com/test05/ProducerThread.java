package com.test05;

public class ProducerThread extends Thread{
	
	private DataBox box;
	
	public ProducerThread(DataBox box) {
		this.box=box;
	}
	
	public void run() {
		for(int i=0; i<4; i++) {
			String data = "Data-"+i;
			box.setData(data);
		}
	}

}
