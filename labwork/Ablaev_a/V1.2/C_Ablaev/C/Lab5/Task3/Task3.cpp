#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int age;
	cout << "enter your age: ";
	cin >> age;
	if (age <= 6) {
		cout << "детский сад";
	}
	else if (age >= 7 & age <= 16) {
		cout << "школа";
	}
	else if (age >= 17 & age <= 22) {
		cout << "университет";
	}
	else if (age >= 23 & age <= 60) {
		cout << "работа или компания";
	}
	else {
		cout << "дом";
	};
}
