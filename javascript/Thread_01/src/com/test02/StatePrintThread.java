package com.test02;

//생성자 매개값으로 받은 타겟 스레드의 상태를 0.5초 주기로 출력한다
public class StatePrintThread extends Thread {

	private Thread targetThread;

	public StatePrintThread(Thread targetThread) {// 파라미터 : 상태를 조사할 스레드
		this.targetThread = targetThread;
	}

	public void run() {
		while (true) {
			Thread.State state = targetThread.getState(); // 스레드 상태 얻기
			System.out.println("타겟 스레드 상태 " + state);

			if (state == Thread.State.NEW) { // 객체 생성 상태일 경우 실행 대기상태로
				targetThread.start();
			}

			if (state == Thread.State.TERMINATED) { // 종료 상태일 경우 while문 종료
				break;
			}

			try {
				Thread.sleep(500);
			} catch (Exception e) {

			}

		}
	}

}
