#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int i, k, temp;
	int A[8];
	for (i = 0; i < 8; i++) {
		cin >> A[i];
	}
	for (k = 0; k < 8; k++) {
		for (i = 1; i < 8; i++) {
			if (A[i] > A[i - 1]) {
				temp = A[i];
				A[i] = A[i - 1];
				A[i - 1] = temp;
			}
		}
	}
	for (i = 0; i < 8; i++)cout << A[i] << ' ';
}
