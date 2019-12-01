package algorithm_01;

//brute force
public class String_Searching {

	public static void main(String[] args) {

		// ex> ABCDEFRGWEGWEGDSF '텍스트'에서 '패턴' GWE를 찾는다

		String s1 = "ABCDEFRGWEGWEGDSF";

		String s2 = "GWE";

		// txt커서
		int pt = 0;
		// pat커서
		int pp = 0;

		boolean result = true;

		while (pp != s2.length()) {

			if (s1.charAt(pt) == s2.charAt(pp)) {
				pt++;
				pp++;

			} else {
				pt = pt - pp + 1;
				pp = 0;
			}

		}

		System.out.printf("%d 번째에 찾는 문자", pt - pp);

		int sun = s1.indexOf(s2);

		System.out.println(sun);

		System.out.println(s1.substring(7, 10));

		if (s1.substring(7, 10).equals(s2)) {
			System.out.println("hi");
		}

	}

}
