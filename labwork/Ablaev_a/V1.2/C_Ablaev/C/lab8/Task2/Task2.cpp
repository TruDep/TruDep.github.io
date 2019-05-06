#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int i, temp;
    int A[8];
	for (i = 0; i < 8; i++) {
		cin >> A[i];
	}
	for (i = 0; i < 4; i++) {
		temp = A[i];
		A[i] = A[7-i];
		A[7-i] = temp;
	}
	for (i = 0; i < 8; i++)cout << A[i] << ' ';
}