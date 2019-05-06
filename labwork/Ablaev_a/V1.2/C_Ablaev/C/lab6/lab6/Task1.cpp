#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int val, s = 0;
	cout << "enter sequence of numbers/n";
	while (s <= 100) {
		cin >> val;
		if(val>0)s = s + val * val;
	};
	cout << "s = " << s << endl;
	cin.get();
}

