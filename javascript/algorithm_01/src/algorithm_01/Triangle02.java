package algorithm_01;

public class Triangle02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		int a[][] = new int[5][5];
		int v=1;
		int r=0;
		int c;
		
		do {
			c=r;
			do {
			   a[r][c] =v;
			   v++;
			   c++;
			}while(c<=4);
			r++;
			
		}while(r<=4);
		
		
		
		
		for(int i =0; i<a.length; i++) {
			for(int j =0; j<a[i].length; j++) {
				System.out.printf("%3d ", a[i][j]);
			}System.out.println("");
		}
		
		
		
	}

}
