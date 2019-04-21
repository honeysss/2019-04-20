package review;

import java.util.ArrayList;

public class Review {

	public static void main(String[] args) {
		
		
//	定义数组a  
		ArrayList<Integer> a = new ArrayList<>();
		a.add(1);
		a.add(2);
		a.add(3);
		
//		定义数组b  
		ArrayList<Integer> b = new ArrayList<>();
		b.add(1);
		b.add(2);
		b.add(3);
		b.add(4);
		b.add(5);
		
//		
		if (a.size() < b.size()) {
			for (int i = 0; i < b.size(); i ++) {
//				如果b中有a的元素 a包含b
				if (a.contains(b.get(i))) {
//					删除b
					b.remove(i);
					i = i - 1;
				}
			}
		}
		
		System.out.println(b);
		
		
	}
}
