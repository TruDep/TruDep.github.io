#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int N, K = 0, s = 0;
	cin >> N;
	while (s <= N) {
		K++;
		s += K;
	}
	s -= K;
	K--;
	cout << K << endl << s << endl;
	return 0;
}