#include "pch.h"
#include <iostream>
using namespace std;

bool prime(int a) {
	if (a == 1)return true;
	else {
		int check = 0;
		for (int i = 1; i <= a; i++) {
			if (a%i == 0)check++;
		}
		return check == 2 ? true : false;
	}
}

int main()
{
	prime(1);
	prime(5);
	prime(12);
	prime(17);
	prime(63);
}
