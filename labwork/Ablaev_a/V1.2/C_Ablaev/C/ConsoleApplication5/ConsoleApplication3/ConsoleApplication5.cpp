#include "pch.h"
#include <iostream>
using namespace std;

bool even(int x) {
	if (x % 2 == 0) {
		return true;
	}
	else{
		return false;
	}
};

int main() {
	int X;
	int count = 0;
	for (int i = 0; i < 10; i++) {
		cin >> X;
		if (even(X)) {
			count++;
		}
	};
	cout << count << endl;
	return 0;	
}