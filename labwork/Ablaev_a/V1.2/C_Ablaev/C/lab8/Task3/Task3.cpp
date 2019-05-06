#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int i, k1, k2;
	int A[8];
	for (i = 0; i < 8; i++) {
		cin >> A[i];
	}
	cin >> k1 >> k2;
	for (i = k1; i <= k2; i++) {
		A[i] = A[i] * (-1);
	}
	for (i = 0; i < 8; i++)cout << A[i] << ' ';
}
