#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int x, min, max;
	cin >> x;
	min = x;
	max = x;
	while (x != 0) {
		if (x < min)
			min = x;
		if (x > max)
			max = x;
		cout << "Enter x: ";
		cin >> x;
	}
	cout << "min = " << min << endl << "max = " << max << endl;
}
