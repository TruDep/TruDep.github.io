#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	double x, y;
	cout << "enter point coordinates:\n";
	cout << "x = ";
	cin >> x;
	cout << "y = ";
	cin >> y;
	if (x >= 0 & y <= 0 & y >= x - 2 || x <= 0 & y >= 0 & y <= x + 1) {
		cout << "this point belongs to area";
	}
	else {
		cout << "this point doesn’t belong to area";
	};
	cin.get();
}
