#include "pch.h"
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
	int sum1 = 0, sum2 = 0, sum3 = 0; 
	char x;
	string l;
	ifstream inFile;
	inFile.open("C:\\users\\user\\Desktop\\XXX.txt");
	while (inFile >> l) { 
		cout << l;
	};
    
}