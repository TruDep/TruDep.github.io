#include "pch.h"
#include <iostream>
using namespace std;


int main()
{
	int i, pos = 0, neg = 0;
	int A[8];
	for (i = 0; i < 8; i++) {
		cin >> A[i];
	}
	for (i = 0; i < 8; i++) {
		if (A[i] > 0)pos++;
		else if (A[i] < 0)neg++;
	}
	cout << "There are " << pos << " positive and " << neg << " negative numbers." << endl;
}
