#include "pch.h"
#include <iostream>
using namespace std;

void decr(int &x) {
	x--;
	cout << "in decr() x = " << x << endl;
	
}
int incr2(int a) {
	return --a;
}

int main()
{
	int x;
	cin >> x;
	decr(x);
	x = incr2(x);
	cout << "in main() x = " << x << endl;
}
