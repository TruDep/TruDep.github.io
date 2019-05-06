#include "pch.h" //visual studio сама подключила все необходимые библиотек, такие как:
//<math.h> <stdlib.h> и т.д, но чтобы знать какая за какую отвечает, подключим их ещё раз)
#include <iostream>
#include <iomanip> //библиотека Манипулятора потока
#include <math.h> //библиотека математических операций sin , cos и т.д.
#include <stdlib.h> //для модуля
#include <cmath>
#include <fstream>
#include <string>
#include <algorithm>

//stl


using namespace std;

char x; //искомый символ
char y; //заменяемый символ
string str;
//char str;

//int main()
//{
//	setlocale(LC_ALL, "Russian");  //Руский шрифт в консоле
//	ofstream file1("1.txt", ios::out);
//	ifstream file2("2.txt", ios::out);
//
//	if (!file1) {
//		cerr << "Файл не может быть открыт" << endl;
//		exit(1);
//	}
//
//
//	
//
//	cout << "Введите искомый символ: ";
//	cin >> x;
//	cout << "Введите заменяемый символ: ";
//	cin >> y;
//	//Найти в файле символ и заменить его на другой
//
//
//
//	//file1 << " Привет мир2! " << endl;
//
//	while (getline(file2, str)) //getline(istream & is, string &s,char c='\n'),читает из потока is, в строку s пока 
//	{                        //не встретит символ c (без этого символа до новой строки)
//						   // возвращает свой объект istream, в условии проверяется состояние iostate флагa, значение этого флага будет ложным, если достигнет конца файла, или будет ошибка ввода или читаемого типа
//		//funk2(str); // вызываем нужною функцию для полученной строки
//		
//		
//	}
//	
//	replace(str.begin(), str.end(), x, y);
//	
//		cout << str;
//	return 0;
//}

//void main()
//{
//	int code;
//	char ch;
//	cin >> ch;
//	code = (int)ch;
//	cout << code;
//	cin.get();
//	cin.get();
//}

//
//void main()
//{
//	
//	cout << ceil(2.3) << endl;
//	cout << ceil(-3.6) << endl;
//	cout << ceil(3.8) << endl;
//	cout << ceil(-5.1) << endl;
//
//	cout  << endl;
//
//	cout << floor(2.3) << endl;
//	cout << floor(-3.6) << endl;
//	cout << floor(3.8) << endl;
//	cout << floor(-5.1) << endl;
//	cout << endl;
//	cout << trunc(2.3) << endl;
//	cout << trunc(-3.6) << endl;
//	cout << trunc(3.8) << endl;
//	cout << trunc(-5.1) << endl;
//	cout << endl;
//	cout << round(2.3) << endl;
//	cout << round(-3.6) << endl;
//	cout << round(3.8) << endl;
//	cout << round(-5.1) << endl;
//}


void main()
{
	float S;
	float p;
	float a, b, c;
	cin >> a >> b >>c;

	p = (a + b + c) / 2;
	S = p * (p - a)*(p - b)*(p - c);

	cout << sqrt(S);

	cin.get();
	cin.get();
}

