#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int a, b;
	cout << "Enter a and b: ";
	cin >> a >> b;
	if (a > b) {
		cout << "a > b";
	}
	else if (a = b) {
		cout << "a = b";
	}
	else {
		cout << "a < b";
	};
	cin.get();
}
