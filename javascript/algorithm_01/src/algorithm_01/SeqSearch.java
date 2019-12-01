package algorithm_01;

public class SeqSearch {

	public static void main(String[] args) {

		for (int i = 0; i <= 4; i++) {
			for (int j = i; j <= 4; j++) {
				System.out.printf(" ★");

			}
			System.out.println("");

		}

		


/*
		*
	   * *
	  * * *
	 * * * *
	*/	
		for (int i = 0; i < 4; i++) {
			for (int j = i; j <= 3; j++) {

				System.out.printf("-");

			}
			for (int e = 0; e <= i; e++) {
				System.out.printf("* ");
			}
			System.out.println("");
		}

		
		//버블정렬
		int[] num = { 5, 1, 89, 55, 4, 66 };
		int temp = 0;
		for (int i = 0; i < num.length - 1; i++) {

			for (int j = 0; j < num.length - i-1; j++) {
				if (num[j] > num[j + 1]) {
					temp = num[j + 1];
					num[j + 1] = num[j];
					num[j] = temp;
				}
			}

		}

		for (int i = 0; i < num.length - 1; i++) {

			System.out.printf("%d ", num[i]);

		}


		


		
		
		
	}

}
