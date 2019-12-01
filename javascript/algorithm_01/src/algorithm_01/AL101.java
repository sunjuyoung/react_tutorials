package algorithm_01;

public class AL101 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int a = 1;
		int b = 1;
		int c = 0;
		int sum = 0;
		int n=2;

	
		while (true) {

			sum += a + b;

			c = a + b;

			a = b;

			b = c;
			
			n++;
			if(n==100)break;
			

		}
		System.out.println(sum);

	}

}
