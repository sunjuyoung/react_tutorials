package com.test03;

import java.awt.Toolkit;

public class Beep extends Thread {

	Toolkit tk = Toolkit.getDefaultToolkit();

	@Override
	public void run() {

		for (int i = 0; i < 5; i++) {
			tk.beep();
			try {
				Thread.sleep(500);
			} catch (Exception e) {

			}

		}

	}

}
