package algorithm_01;

import java.util.Scanner;

public class med3 {

	public static void main(String[] args) {

		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("정수를 입력하세요");
		int n = sc.nextInt();
		System.out.println("정수를 입력하세요");
		int m = sc.nextInt();
		

		System.out.println("= " + med(n,0,0));
		
		
	}
	
	static int med(int a ,int b ,int c) {
		
		StringBuilder sb = new StringBuilder();
	
		int sum=0;
		for(int i=a; i<=b; i++  ) {
			if(i==a)sb.append(String.format("%s ", i));
			else
			sb.append(String.format("%s +", i));
			sum+=i;
		}
		System.out.println(sb.toString());
		
		
		return sum;
	}

}
