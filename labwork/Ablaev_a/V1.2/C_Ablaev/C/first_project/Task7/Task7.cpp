#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int chr, shrt, in, flt, dbl;
	chr = sizeof(char);
	shrt = sizeof(short);
	in = sizeof(int);
	flt = sizeof(float);
	dbl = sizeof(double);
	cout << "size of char = " << chr << endl << "size of short = " << shrt << endl << "size of int = " << in << endl << "size of float = " << flt << endl << "size of double = " << dbl << endl;
}
