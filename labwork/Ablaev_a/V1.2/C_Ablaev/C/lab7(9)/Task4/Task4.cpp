#include "pch.h"
#include <iostream>
using namespace std;

double distance(int x1, int y1, int x2, int y2) {
	double result = sqrt(pow((x2 - x1),2) + pow((y2 - y1),2));

	return result;
}

int main()
{
	double AB = distance(1, 0, 3, 2);
	double BC = distance(3, 2, 4, 3);
	double AC = distance(1, 0, 4, 3);
	double AD = distance(1, 0, 0, 1);
	double BD = distance(3, 2, 0, 1);
	bool triangleABC, triangleABD;
	if ((AB + BC) > AC && (AB + AC) > BC && (BC + AC) > AB) triangleABC = true;
	else triangleABC=false;
	if ((AB + BD) > AD && (AB + AD) > BD && (BD + AD) > AB) triangleABD = true;
	else triangleABD = false;
	cout << "ABC is a triangle: " << triangleABC << endl << "ABD is a triangle: " << triangleABD << endl;
}
	