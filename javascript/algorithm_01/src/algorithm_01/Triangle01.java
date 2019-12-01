package algorithm_01;

public class Triangle01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	/*
		1  2  3  4  5
		   6  7  8  9
		      10 11 12
		         13 14
		            15
		*/
		
		int size=5;
		int[][]arr = new int[size][size];
/*		int n=0;
		int j=0;
		int cnt=0;
		*/
		
		
		
		/*
		for(int i=0; i<size; i++) {			
			for( j=i; j<size; j++) {
				arr[i][j] = ++cnt; 				
			}			
		}
		
		
		*/
		
		int v = 1;
		int c =0;
		int r =0;
		
		
		
		do {
			
			c=r;
			do {
		          arr[r][c] = v;
		     ++v;
		     ++c;
				
			}while(c<=4);
			++r;	
			
		}while(r<=4);
		
		
		

		
		
		
		
		for (int a=0; a<arr.length; ++a) {
			for (int b=0; b<arr[a].length; ++b) {
				System.out.printf("%3d", arr[a][b]);
			}
			//줄바꿈 문자 출력
			System.out.print("\n");
		}
		
		
	
	}

}
