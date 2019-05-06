#include "pch.h"
#include <iostream>
using namespace std;

int max(int a, int b)
{
	if (a > b)
		return a;
	else
		return b;

}

int main()
{
    int TwelveOrNine = max(12, 9); 
	int nSixOrnSeven = max(-6, -7);
	int ThirtyOrnThirty = max(30, -30);
	int a = max(12, max(9, 20));
	int b = max(15, max(17, 16));
	int c = max(12, max(-8, max(31, max(7, max(22, -1)))));
}
