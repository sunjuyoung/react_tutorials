package algorithm_01;

public class AL90 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int sum = 0;
		int sum1 = 0;
		for (int i = 1; i <= 100; i++) {
			sum += i;

		}
		System.out.println(sum);

		int i = 1;
		boolean result = true;
		while (result) {

			sum1 += i;
			if(i>=100)result=false;
			i++;
			
		}

		System.out.println(sum1);
	}

}
