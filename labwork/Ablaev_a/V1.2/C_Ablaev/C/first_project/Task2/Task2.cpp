#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int y, x;
	double D, x1, x2;
	cin >> x;
	y = 72 * x * x + 5 * x - 7;
	D = sqrt(pow(5,2)-4*72*(-7));
	x1 = (-5 + D) / (2*72);
	x2 = (-5 - D) / (2*72);
	cout << y << endl << x1 << endl << x2 << endl;
}
