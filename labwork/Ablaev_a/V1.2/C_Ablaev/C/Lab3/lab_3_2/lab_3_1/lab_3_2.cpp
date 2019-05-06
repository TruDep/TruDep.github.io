#include "pch.h" //visual studio сама подключила все необходимые библиотек, такие как:
//<math.h> <stdlib.h> и т.д, но чтобы знать какая за какую отвечает, подключим их ещё раз)
#include <iostream>
#include <iomanip> //библиотека Манипулятора потока
#include <math.h> //библиотека математических операций sin , cos и т.д.
#include <stdlib.h> //для модуля
#include <cmath>

using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");  //Руский шрифт в консоле
	double num1, num2;
	double x;
	short f = 0;


	cout << "enter number 1: ";
	cin >> num1;
	cout << "enter number 2: ";
	cin >> num2;

	// 1.2
	x = num1 * num1 + 3 * num2;
	if (x < 0) { cout << "(1.1) the result is: Не извлекается корень" << endl; f = 1; }
	else { x = sqrt(x); }
	x = x - num1;

	if (num2 == 0) { cout << "(1.1) the result is: На ноль делить нельзя!" << endl; }
	else { if (f == 0) { x = x / (2 * num2); cout << "(1.1) the result is: " << x << endl; } }

	//1.2
	f = 0;
	x = num1 * num2 + 3;
	if (num1 == 0) { cout << "(1.2) the result is: На ноль делить нельзя!" << endl;  f = 1;}
	else { x = x / (4 * num1 * num1); }

	if (x < 0) { cout << "(1.2) the result is: Не извлекается корень" << endl; }
	else { if (f == 0) { x = sqrt(x); cout << "(1.2) the result is: " << x << endl; } }


	//1.3
	f = 0;
	x = 6 - abs(num1 - num2 * 3);
	if ((5 - num2 * num2) < 0) { cout << "(1.3) the result is: Не извлекается корень" << endl; }
	else { if ((5 - num2 * num2) == 0){cout << "(1.3) the result is: На ноль делить нельзя!" << endl; } 
	else { x = x / sqrt(5 - num2 * num2);  cout << "(1.3) the result is: " << x << endl;}
	}
	
	//1.4
	f = 0;
	x = 37 * num2 - num1 * num1 * num1;
	if (x < 0) { cout << "(1.4) the result is: Не извлекается корень" << endl; }
	else { x = sqrt(x) * exp(num1 + 7); cout << "(1.4) the result is: " << x << endl; }


	//1.5
	f = 0;
	x = (num2*num2) / (cos(num1 * 2) + 23) + sin(num1);
	cout << "(1.5) the result is: " << x <<endl;


	//1.6
	f = 0;
	if ((num2 +4) < 0) { cout << "(1.6) the result is: Не извлекается корень" << endl; }
	else { if ((num2 + 4) == 0) { cout << "(1.6) the result is: На ноль делить нельзя!" << endl; } 
	else { x = 2 / sqrt(num2 + 4) - num2 * 3 + num1;
	if (cos(num2) == 0 ){ cout << "(1.6) the result is: Не извлекается тангенс" << endl; }
	else { x = tan(num2) - abs(x); cout << "(1.6) the result is: " << x << endl;}
	}

	}



	//cin.get();
	// Ждемм enter, чтобы завершить программу

}