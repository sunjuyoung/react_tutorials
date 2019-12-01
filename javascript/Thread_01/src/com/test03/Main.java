package com.test03;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Beep b = new Beep();

		Runnable a = new Sound();
		Thread th = new Thread(a);
		b.start();

		th.start();

	}

}
