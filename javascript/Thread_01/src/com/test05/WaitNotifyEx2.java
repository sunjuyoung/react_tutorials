package com.test05;

public class WaitNotifyEx2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		DataBox box = new DataBox();
		
		ConsummerThread con = new ConsummerThread(box);
		ProducerThread pro = new ProducerThread(box);
		
		pro.start();
		con.start();
		
	}

}
