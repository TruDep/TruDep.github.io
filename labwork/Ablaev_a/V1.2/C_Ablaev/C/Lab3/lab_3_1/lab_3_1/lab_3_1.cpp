#include "pch.h"
#include <iostream>
#include <iomanip> //библиотека Манипулятора потока

using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");  //Руский шрифт в консоле
	int a, b;


	cout << "Enter Meters: ";
	cin >> a;
	cout << a/1000 <<" km " << a%1000 << " m " <<endl;


	//cin.get();
	// Ждемм enter, чтобы завершить программу

}