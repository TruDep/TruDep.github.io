#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	char name[6];
    cout<<"enter your name: "; 
	cin >> name;
	cout << "the result is: ";
	for (int i = 0; i < 5; i++) {
		cout << int(name[i]);
	}
	cin.get();
}
