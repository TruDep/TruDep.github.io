#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	string a[] = { "red","green","green","white","red" };
	int i, red = 0, green = 0, white = 0;
	for (i = 0; i < 5; i++) {
		if (a[i] == "red") {
			red++;
		}
		else if (a[i] == "green")
		{
			green++;
		}
		else
		{
			white++;
		}
	}
	cout << "red = " << red << endl << "green = " << green << endl << "white = " << white << endl;

}
