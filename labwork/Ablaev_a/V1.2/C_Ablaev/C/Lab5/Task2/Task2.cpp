#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int x;
	cin >> x;
	if (x >= (-3)&x <= 1 || x > 5 & x < 8) {
		cout << "this point belongs to area" << endl;
	}
	else {
		cout << "this point doesn’t belong to area" << endl;
	};
	cin.get();
}
