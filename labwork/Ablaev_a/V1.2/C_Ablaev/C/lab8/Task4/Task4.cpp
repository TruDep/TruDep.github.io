#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int A[] = { 3,5,-2,9,-1 };
	int B[] = { 3,-7,10,9,-1 };
	char C[5];
	for (int i = 0; i < 5; i++) {
		if (A[i] == B[i]) C[i] = '+';
		else C[i] = '-';
	}
	for (int i = 0; i < 5; i++)cout << C[i] << ' ';
}
