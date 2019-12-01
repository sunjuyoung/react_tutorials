package algorithm_01;

import java.util.Scanner;

public class Max3 {

	public static void main(String[] args) {

		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("첫 번째 숫자 입력");
		int a = sc.nextInt();

		System.out.println("첫 번째 숫자 입력");
		int b = sc.nextInt();

		System.out.println("첫 번째 숫자 입력");
		int c = sc.nextInt();
		
		int max=0;
		
		if(a>b) {
			max=a;
		}else if(b>c) {
			max=b;
		}else {
			max=c;
		}

		
		System.out.printf("가장 큰 수는 %d",max);
		
	}
	
	
	static int max(int a , int b , int c) {
		
		int max = 0;
		
		max = a;
		if(b<max) max=b;
		if(c<max) max=c;
		
		
		
		return max;
	}
	

}
