#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int a[8] = { 12,13,16,18,19,14,14 };
	int i;
	double sum = 0, av;
	for (i = 0; i < 7; i++) {
		sum += a[i];
	}
	av = sum / 7;
	cout << av << endl;
}
