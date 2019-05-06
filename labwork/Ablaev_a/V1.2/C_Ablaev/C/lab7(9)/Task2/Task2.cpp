#include "pch.h"
#include <iostream>
using namespace std;

int factorial(int a) {
	int result = 1;
	for (int i = 1; i <= a; i++) {
		result *= i;
	}
	return result;
}

int main()
{
	int i, n, sum = 0;
	cin >> n;
	for (i = 1; i <= n; i++) {
		sum = sum + 2 * i / factorial(i);
	}
	cout << sum << endl;
}
