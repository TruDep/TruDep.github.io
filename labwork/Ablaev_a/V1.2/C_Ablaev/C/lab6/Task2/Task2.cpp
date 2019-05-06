#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int sum = 0, mult = 1, min;
	int num[10] = { 7, 12,-13,32,63,-2,61,14,52,0 };
	min = num[0];
	for (int i = 0; i < 10; i++) {
		if (num[i] > 10 && num[i] < 25)sum += num[i];
		if (num[i] > 15)mult *= num[i];
		for (int k = 1; k < 10; k++) {
			if (num[k] < min)min = num[k];
		}
	}
	cout << "sum = " << sum << endl << "mult = " << mult << endl << "min = " << min << endl;

}
