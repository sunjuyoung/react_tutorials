package algorithm_01;

public class Main {

	public static void main(String[] args) {

		
		Max3 max = new Max3();
		
		
		System.out.println(max.max(4, 99, 22));
		
		System.out.println(mid(33,2,3));
		
		
	}

	
static int mid(int a , int b , int c) {
	
	int mid = 0;
	

	if(a>b) {
		if(b>c) {
			mid=b;
		}else if(a>c) {
			mid=c;
		}else {
			mid=a;
		}
	}else if(a>c) {
		mid=a;
	}else if(b>c) {
		mid=c;
	}else {
		mid=b;
	}
	
	
	
	
	return mid;
}
	
	
}
