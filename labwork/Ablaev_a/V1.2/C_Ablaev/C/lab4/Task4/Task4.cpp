#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	char a[6] = "abcde";
	char temp = a[4];
	a[4] = a[2];
	a[2] = a[0];
	a[0] = temp;
	cout << "the result is: " << a << endl;
	cin.get();
}