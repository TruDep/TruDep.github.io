#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	char chr;
	int i = 0, num;
	cout << "Enter symbol: ";
	cin >> chr;
	while (chr != '.') {
		cout << "Enter number: ";
		cin >> num;
		for (int k = 0; k < num; k++) {
			cout << chr;
		}
		cout << endl;
		cout << "Enter symbol: ";
		cin >> chr;
	}
	cout << "Bye!" << endl; 
}